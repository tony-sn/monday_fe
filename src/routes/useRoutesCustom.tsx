import { useRoutes } from "react-router-dom";
import Demo from "../components/Demo";

const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Demo />,
    },
    {
      path: "/home",
      element: <h1 className="text-red-500">Hello</h1>,
    },
    {
      path: "/demo",
      element: <h1>Hello Demo</h1>,
    },
  ]);

  return element;
};

export default useRoutesCustom;
