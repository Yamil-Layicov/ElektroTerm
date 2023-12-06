import "./icarePage.scss";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { basicSchema } from "./shemas";
import { toast } from "react-toastify";
import api from "../../admin/api/posts";
import { useQuery } from "@tanstack/react-query";
import { ThreeCircles } from "react-loader-spinner";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const response = await api.post("rent", values);
  if(response) return toast.success('Mesaj göndərildi');
  actions.resetForm();
};



const IcarePage = () => {

  const { isLoading, data } = useQuery({
    queryKey: ["banner"],
    queryFn: () => api.get("banners/rent"),
  });

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
      note:""
    },
    validationSchema: basicSchema,
    onSubmit,
  });

 


  return (
    <>
    {
      isLoading ? <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#092635",
        position: "fixed",
        zIndex: "999",
      }}
    >
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div> :   <div className="icarePage">
        <div className="imgBanner" style={{
              backgroundImage: `url(${data?.data?.image})`,
              width: "100%",
              height: "360px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
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
              value={values.note}
              onChange={handleChange}
              cols="30"
              rows="8"
              name="note"
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
    }
    
    </>
  );
};

export default IcarePage;
