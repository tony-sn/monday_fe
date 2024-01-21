import {
  Form,
  useLoaderData,
  redirect,
  LoaderFunctionArgs,
} from "react-router-dom";

export default async function action({ request, params }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string | null;
  console.log("email", email);
  try {
    // const response = await fetch("http://localhost:3000/api/signup", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: email,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (!response.ok) {
    //   return {
    //     error: "Invalid signup",
    //   };
    // }
  } catch (error) {
    return {
      error: "Invalid signup",
    };
  }
  let redirectTo = formData.get("redirectTo") as string | null;
  return redirect(redirectTo || "/signup-email");
}
