import { ErrorMessage, Field, Form, Formik } from "formik";
// import Button from "../Button/Button";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RentForm.module.css";
import Calendar from "../Calendar/Calendar";
import { Toaster, toast } from "react-hot-toast";
import clsx from "clsx";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  date: Yup.date().required("Required"),
  comment: Yup.string(),
});

const handleRent = async (values, actions) => {
  toast.success("Camper successfully booked!");
  actions.resetForm();
};

export default function RentForm({ hero }) {
  const rentFormId = useId();
  return (
    <Formik
      initialValues={{ name: "", email: "", date: "", comment: "" }}
      onSubmit={handleRent}
      validationSchema={validationSchema}
    >
      <Form className={clsx(css.form, hero && css.heroForm)}>
        <h2 className={clsx(css.title, hero && css.heroTitle)}>
          Book your campervan now
        </h2>
        <p className={clsx(css.text, hero && css.heroText)}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.inputs}>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="name"
              id={`${rentFormId}-name`}
              className={css.input}
              placeholder="Name"
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="email"
              id={`${rentFormId}-email`}
              className={css.input}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapperCalendar}>
            <Field
              type={Calendar}
              name="date"
              id={`${rentFormId}-date`}
              className={css.input}
              placeholder="Booking date"
            />
            <ErrorMessage name="date" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapper}>
            <Field
              type="textarea"
              name="comment"
              id={`${rentFormId}-comment`}
              className={css.input}
              placeholder="Comment"
            />
            <ErrorMessage
              name="comment"
              component="span"
              className={css.error}
            />
          </div>
        </div>
        <button type="submit" className={css.btn}>
          Send
        </button>
        <Toaster position="top-center" />
      </Form>
    </Formik>
  );
}
