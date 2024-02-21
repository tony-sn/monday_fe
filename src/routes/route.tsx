import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import signupAction from "./action/signup";
import signupEmailAction from "./action/signupEmail";

const Signup = lazy(() => import("@/pages/signup/Signup"));
const SignupEmail = lazy(() => import("@/pages/signupEmail/SignupEmail"));
const Invitation = lazy(() => import("@/pages/invitation/Invitation"));
const LastQuestion = lazy(() => import("@/pages/lastQuestion/LastQuestion"));
const InviteMates = lazy(() => import("@/pages/inviteMates/InviteMates"));
const SignupLayout = lazy(() => import("@/layouts/SignupLayout"));

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
      {
        path: "/invite-mates",
        Component: InviteMates,
      },
    ],
  },
]);

export default route;
