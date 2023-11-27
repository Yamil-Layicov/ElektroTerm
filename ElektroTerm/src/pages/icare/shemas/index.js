import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


export const basicSchema = yup.object().shape({
  email: yup.string().email("Etibarlı e-poçt ünvanını daxil edin").required("E-poçt qeyd olunmalıdır"),
  phone: yup.number().integer().required("Mobil nömrə qeyd olunmalıdır"),
  name: yup.string().required("Ad qeyd olunmalıdır"),
  surName: yup.string().required("Soyad qeyd olunmalıdır"),
  // password: yup
  //   .string()
  //   .min(5)
  //   .matches(passwordRules, { message: "Please create a stronger password" })
  //   .required("Required bos qoyma"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match")
  //   .required(""),
});


// export const advancedSchema = yup.object().shape({
//   username: yup
//     .string()
//     .min(3, "Username must be at least 3 characters long")
//     .required("Required"),
//   jobType: yup
//     .string()
//     .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
//     .required("Required"),
//   acceptedTos: yup
//     .boolean()
//     .oneOf([true], "Please accept the terms of service"),
// });