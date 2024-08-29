import { useRoutes } from "react-router-dom";
import Demo from "../components/Demo";
import { DatePicker } from "antd";

const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <DatePicker />,
    },
    {
      path: "/home",
      element: <h1 className="text-red-500">Hello</h1>,
    },
    {
      path: "/demo",
      element: <Demo />,
    },
  ]);

  return element;
};

export default useRoutesCustom;
