import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, "Full name is too short")
    .required("Enter your full name"),
  password: Yup.string()
    .min(8, "Password is too short")
    .required("Enter your password"),
});
