import { redirect, LoaderFunctionArgs } from "react-router-dom";

export default async function signupEmailAction({
  request,
}: LoaderFunctionArgs) {
  console.log("this action works, email invitation");
  return redirect("/invitation");
}
