import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/landing/Ebook"));

// landing routes
const Ebook = lazy(() => import("@/pages/landing/Ebook"));


// admin routes
const Dashboard = lazy(() => import("@/pages/admin/Dashboard"));
const Chat = lazy(() => import("@/pages/admin/Chat"));
const Project = lazy(() => import("@/pages/admin/Project"));
const UiComponents = lazy(() => import("@/pages/admin/UiComponents"));

// auth routes
const SignIn = lazy(() => import("@/pages/auth/SignIn"));
const SignUp = lazy(() => import("@/pages/auth/SignUp"));
const ResetPassword = lazy(() => import("@/pages/auth/ResetPassword"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));
const Logout = lazy(() => import("@/pages/auth/Logout"));

const homeRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
];

const landingRoutes = [
  {
    path: "/landing/ebook",
    element: <Ebook />,
  },
];

const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/chat",
    element: <Chat />,
  },
  {
    path: "/admin/project",
    element: <Project />,
  },
  {
    path: "/admin/ui-components",
    element: <UiComponents />,
  },
];

const authRoutes = [
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
  {
    path: "/auth/reset-pass",
    element: <ResetPassword />,
  },
  {
    path: "/auth/forgot-pass",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/logout",
    element: <Logout />,
  },
];

export { adminRoutes, homeRoutes, landingRoutes, authRoutes };
