import { useEffect } from "react";
import { https } from "../services/axios.config";
import { useFormik } from "formik";
import * as Yup from "yup";
const Demo = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: { name: "" },
    onSubmit: (values) => {
      alert(values.name);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
    }),
  });

  useEffect(() => {
    https.get("/api/Product").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="">Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="border border-black p-2 rounded"
            name="name"
            id="name"
            aria-describedby=""
            placeholder="Enter Name"
          />
          <small id="helpId" className="text-red-500">
            {errors.name}
          </small>
        </div>
        <div>
          <button type="submit" className="py-2 rounded bg-black text-white">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
