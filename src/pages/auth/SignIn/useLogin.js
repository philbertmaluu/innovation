import { useAuthContext } from "@/context";
import { HttpClient } from "@/helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import * as yup from "yup";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { isAuthenticated, saveSession } = useAuthContext();

  const loginFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "user@coderthemes.com",
      password: "password",
    },
  });

  const redirectUrl = searchParams.get("redirectTo") ?? "/admin/dashboard";

  const login = handleSubmit(async (values) => {
    setLoading(true);
    try {
      const res = await HttpClient.post("/login", values);
      if (res.data.token) {
        saveSession({
          ...(res.data ?? {}),
          token: res.data.token,
        });
        toast.success("Successfully logged in. Redirecting....", {
          position: "top-right",
          duration: 2000,
        });
        navigate(redirectUrl);
      }
    } catch (e) {
      if (e.response?.data?.error) {
        toast.error(e.response?.data?.error, {
          position: "top-right",
          duration: 2000,
        });
      }
    } finally {
      setLoading(false);
    }
  });

  return { loading, login, control, isAuthenticated };
};

export default useLogin;
