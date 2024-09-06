import logoutImg from "@/assets/images/other/logout.png";
import { PageMetaData } from "@/components";
import { useAuthContext } from "@/context";
import { Link } from "react-router-dom";

const Logout = () => {
  const { removeSession } = useAuthContext();
  removeSession();
  return (
    <>
      <PageMetaData title="Logout" />

      <div className="my-auto text-center">
        <h4 className="mb-4 text-2xl font-bold text-white">See you Again!</h4>
        <p className="mx-auto mb-5 max-w-sm text-default-300">
          You are now successfully sign out.
        </p>
        <div className="flex items-start justify-center">
          <img src={logoutImg} className="h-40" />
        </div>
      </div>
      <p className="shrink text-center text-zinc-200">
        Already have an account ?
        <Link to="/auth/sign-in" className="ms-1 text-primary">
          <b>Login</b>
        </Link>
      </p>
    </>
  );
};

export default Logout;
