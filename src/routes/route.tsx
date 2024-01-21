import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import signupAction from "./action/signup";

const Signup = lazy(() => import("../pages/signup/Signup"));
const SignupEmail = lazy(() => import("../pages/signupEmail/SignupEmail"));
const SignupLayout = lazy(() => import("../layouts/SignupLayout"));

const route = createBrowserRouter([
  {
    path: "/",
  },
  {
    Component: SignupLayout,
    children: [
      {
        index: true,
        element: <Navigate to="/signup" replace />,
      },
      {
        path: "/signup",
        Component: Signup,
        action: signupAction,
      },
      {
        path: "/signup-email",
        Component: SignupEmail,
      },
    ],
  },
]);

export default route;
