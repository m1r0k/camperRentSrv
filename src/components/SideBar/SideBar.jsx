import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import css from "./SideBar.module.css";
import { Icon } from "@iconify/react";
import { changeFilter, removeFilter } from "../../redux/filter/slice";
import { selectFilters } from "../../redux/filter/selectors";

export default function SideBar() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleCheckboxChange = (e, name) => {
    if (e.target.checked) {
      dispatch(changeFilter({ key: name, value: true }));
    } else {
      dispatch(removeFilter({ key: name }));
    }
  };

  const handleShowerChange = (e) => {
    if (e.target.checked) {
      dispatch(changeFilter({ key: "shower", value: true }));
    } else {
      dispatch(changeFilter({ key: "shower", value: false }));
    }
  };

  const handleRadioChange = (e) => {
    dispatch(changeFilter({ key: "vehicleType", value: e.target.value }));
  };

  const handleLocationChange = (e) => {
    dispatch(changeFilter({ key: "location", value: e.target.value }));
  };

  return (
    <Formik
      initialValues={{
        location: filters.location || "",
        ac: filters.airConditioner || false,
        transmission: filters.transmission || false,
        kitchen: filters.kitchen || false,
        tv: filters.tv || false,
        shower: filters.shower || false,
        vehicleType: filters.vehicleType || "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form className={css.div}>
          <ul>
            <li>
              <p className={css.label}>Location</p>
              <div>
                <Icon icon="fluent:location-28-regular" />
                <Field
                  type="text"
                  name="location"
                  placeholder="Kyiv, Ukraine"
                  onChange={(e) => {
                    handleChange(e);
                    handleLocationChange(e);
                  }}
                  value={values.location}
                />
              </div>
            </li>
            <li>
              <p>Filters</p>
              <ul>
                <li>
                  <p>Vehicle equipment</p>
                  <hr />
                  <div className={css.checkboxContainer}>
                    <label className={css.label}>
                      <Field
                        type="checkbox"
                        name="ac"
                        className={css.checkbox}
                        onChange={(e) => {
                          handleChange(e);
                          handleCheckboxChange(e, "ac");
                        }}
                        checked={values.ac > 0}
                      />
                      <Icon icon="fluent:weather-squalls-20-regular" />
                      <span>AC</span>
                    </label>
                    <label className={css.label}>
                      <Field
                        type="checkbox"
                        name="transmission"
                        className={css.checkbox}
                        onChange={(e) => {
                          handleChange(e);
                          handleCheckboxChange(e, "automatic");
                        }}
                        checked={values.transmission === "automatic"}
                      />
                      <Icon icon="tabler:automatic-gearbox" />
                      <span>Automatic</span>
                    </label>
                    <label className={css.label}>
                      <Field
                        type="checkbox"
                        name="kitchen"
                        className={css.checkbox}
                        onChange={(e) => {
                          handleChange(e);
                          handleCheckboxChange(e, "kitchen");
                        }}
                        checked={values.kitchen > 0}
                      />
                      <Icon icon="tabler:tools-kitchen-2" />
                      <span>Kitchen</span>
                    </label>
                    <label className={css.label}>
                      <Field
                        type="checkbox"
                        name="tv"
                        className={css.checkbox}
                        onChange={(e) => {
                          handleChange(e);
                          handleCheckboxChange(e, "tv");
                        }}
                        checked={values.tv > 0}
                      />
                      <Icon icon="gala:tv" />
                      <span>TV</span>
                    </label>
                    <label className={css.label}>
                      <Field
                        type="checkbox"
                        name="shower"
                        className={css.checkbox}
                        onChange={(e) => {
                          handleChange(e);
                          handleShowerChange(e);
                        }}
                        checked={values.shower > 0}
                      />
                      <Icon icon="lucide:shower-head" />
                      <span>Shower/WC</span>
                    </label>
                  </div>
                </li>
                <li>
                  <p>Vehicle type</p>
                  <hr />
                  <label>
                    <Field
                      type="radio"
                      name="vehicleType"
                      value="van"
                      className={css.radio}
                      onChange={(e) => {
                        handleChange(e);
                        handleRadioChange(e);
                      }}
                      checked={values.vehicleType === "van"}
                    />
                    <svg className={css.svg}>
                      <use href="../../assets/icons/van.svg"></use>
                    </svg>
                    <span>Van</span>
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="vehicleType"
                      value="fully"
                      className={css.radio}
                      onChange={(e) => {
                        handleChange(e);
                        handleRadioChange(e);
                      }}
                      checked={values.vehicleType === "fullyIntegrated"}
                    />
                    <svg className={css.svg}>
                      <use href="../../assets/icons/fully.svg"></use>
                    </svg>
                    <span>Fully Integrated</span>
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="vehicleType"
                      value="alcove"
                      className={css.radio}
                      onChange={(e) => {
                        handleChange(e);
                        handleRadioChange(e);
                      }}
                      checked={values.vehicleType === "alcove"}
                    />
                    <svg className={css.svg}>
                      <use href="../../assets/icons/alcove.svg"></use>
                    </svg>
                    <span>Alcove</span>
                  </label>
                </li>
              </ul>
            </li>
          </ul>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
