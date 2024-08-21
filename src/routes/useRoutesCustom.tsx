import { useRoutes } from "react-router-dom";
import Demo from "../components/Demo";
const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Demo />,
    },
  ]);

  return element;
};

export default useRoutesCustom;
