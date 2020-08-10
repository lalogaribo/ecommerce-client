import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const CustomFormField = ({ name, label, placeholder, ...otherProps }) => {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...otherProps}
        name={name}
        id={name}
        className="form-control"
        placeholder={placeholder}
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default CustomFormField;
