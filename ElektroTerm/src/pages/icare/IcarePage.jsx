import Navbar from "../../components/navbar/Navbar";
import "./icarePage.scss";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { basicSchema } from "./shemas";
import { toast } from "react-toastify";

const onSubmit = async (values, actions) => {
  console.log(actions);
  console.log(values);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  toast.success('Mesaj göndərildi');
  actions.resetForm();
};

const IcarePage = () => {
  const {
    handleSubmit,
    errors,
    handleChange,
    isSubmitting,
    touched,
    handleBlur,
    values,
  } = useFormik({
    initialValues: {
      email: "",
      phone: "",
      name: "",
      surName: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // console.log(errors);

  return (
    <>
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
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amaount: 1 }}
            onSubmit={handleSubmit}
          >
            <div className="inputs">
              <div className="input">
                <input
                  value={values.name}
                  onChange={handleChange}
                  id="name"
                  type="text"
                  onBlur={handleBlur}
                  placeholder="Ad"
                  className={
                    errors.name && touched.name ? "inputError" : ""
                  }
                />
                {errors.name && touched.name && <small>{errors.name}</small>}
              </div>
              <div className="input">
                <input
                  value={values.surName}
                  onChange={handleChange}
                  id="surName"
                  type="text"
                  onBlur={handleBlur}
                  placeholder="Soyad"
                  className={
                    errors.surName && touched.surName
                      ? "inputError"
                      : ""
                  }
                />
                {errors.surName && touched.surName && <small>{errors.surName}</small>}
              </div>
              <div className="input">
                <input
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  onBlur={handleBlur}
                  placeholder="E-poçt"
                  className={errors.email && touched.email ? "inputError" : ""}
                />
                {errors.email && touched.email && <small>{errors.email}</small>}
              </div>
              <div className="input">
                <input
                  value={values.phone}
                  onChange={handleChange}
                  id="phone"
                  type="number"
                  onBlur={handleBlur}
                  placeholder="Mobil nömrə"
                  className={errors.phone && touched.phone ? "inputError" : ""}
                />
                {errors.phone && touched.phone && <small>{errors.phone}</small>}
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
              <button disabled={isSubmitting} type="submit">
                mesaj göndərin
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default IcarePage;
