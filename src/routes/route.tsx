import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import signupAction from "./action/signup";
import signupEmailAction from "./action/signupEmail";

const Signup = lazy(() => import("src/pages/signup/Signup"));
const SignupEmail = lazy(() => import("src/pages/signupEmail/SignupEmail"));
const Invitation = lazy(() => import("src/pages/invitation/Invitation"));
const LastQuestion = lazy(() => import("src/pages/lastQuestion/LastQuestion"));
const SignupLayout = lazy(() => import("src/layouts/SignupLayout"));
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
        action: signupEmailAction,
      },
      {
        path: "/invitation",
        Component: Invitation,
      },
      {
        path: "/last-question",
        Component: LastQuestion,
      },
    ],
  },
]);

export default route;
