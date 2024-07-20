import * as Yup from "yup";

export const rentFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(25, "Too long!")
    .required("This is required you dummy!"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  rentDate: Yup.date().required("Date is required").nullable(),
  comment: Yup.string().max(150, "Too long, 150 symbols max"),
});
