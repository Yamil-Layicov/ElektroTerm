import Navbar from "../../components/navbar/Navbar";
import "./icarePage.scss";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { basicSchema } from "./shemas";

const onSubmit = async (values, actions) => {
  console.log(actions);
  console.log(values);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  actions.resetForm();
}

const IcarePage = () => {
 
  const {handleSubmit, errors, handleChange, isSubmitting, touched, handleBlur, values} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // console.log(errors);
 

  return (
    <>
      <Navbar color={"#1C1F2E"} />
      <div className="icarePage">
        <div className="imgBanner">
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            İcarə
          </motion.h1>
        </div>
        <div className="formBox">
          <h4>
            <span></span> Əlaqə Saxlayın
          </h4>
          <h1>Mesaj göndərin</h1>
          <motion.form
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amaount: 1 }}
            onSubmit={handleSubmit}
          >
            <div className="inputs">
              <div className="input">
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                onBlur={handleBlur}
                placeholder="email"
                className={errors.email && touched.email ? "inputError" : ""}
              />
              {errors.email && touched.email && <small>{errors.email}</small>}
              </div>
             <div className="input">
             <input
                value={values.age}
                onChange={handleChange}
                id="age"
                type="number"
                onBlur={handleBlur}
                placeholder="age"
                className={errors.age && touched.age ? "inputError" : ""}
              />
              {errors.age && touched.age && <small>{errors.age}</small>}
             </div>
             <div className="input">
             <input
                value={values.password}
                onChange={handleChange}
                id="password"
                type="password"
                onBlur={handleBlur}
                placeholder="password"
                className={errors.password && touched.password ? "inputError" : ""}
              />
             </div>
              <div className="input">
              <input
                value={values.confirmPassword}
                onChange={handleChange}
                id="confirmPassword"
                type="password"
                onBlur={handleBlur}
                placeholder="password"
                className={errors.confirmPassword && touched.confirmPassword ? "inputError" : ""}
              />
              </div>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="qeyd"
            ></textarea>
            <div>
              <button disabled={isSubmitting} type="submit">mesaj göndərin</button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default IcarePage;
