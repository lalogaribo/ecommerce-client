import React from "react";
import { useFormikContext } from "formik";

const Select = ({ name, label, options, error, ...rest }) => {
  const { handleChange } = useFormikContext();
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        {...rest}
        className="form-control"
        onChange={handleChange(name)}
      >
        <option value="">Select a category</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
