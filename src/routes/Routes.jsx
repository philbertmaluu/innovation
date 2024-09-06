import { useAuthContext } from "@/context";
import {
  AdminLayout,
  AuthLayout,
  DefaultLAyout,
  LandingLayout,
} from "@/layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import { adminRoutes, authRoutes, homeRoutes, landingRoutes } from "./index";

const AllRoutes = (props) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Routes>
      <Route>
        {homeRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<DefaultLAyout {...props}>{route.element}</DefaultLAyout>}
            key={idx}
          />
        ))}
      </Route>

      <Route>
        {landingRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<LandingLayout {...props}>{route.element}</LandingLayout>}
            key={idx}
          />
        ))}
      </Route>

      <Route>
        {adminRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              isAuthenticated ? (
                <AdminLayout {...props}>{route.element}</AdminLayout>
              ) : (
                <Navigate
                  to={{
                    pathname: "/auth/sign-in",
                    search: "redirectTo=" + route.path,
                  }}
                />
              )
            }
            key={idx}
          />
        ))}
      </Route>

      <Route>
        {authRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<AuthLayout {...props}>{route.element}</AuthLayout>}
            key={idx}
          />
        ))}
      </Route>



    </Routes>
  );
};

export default AllRoutes;
