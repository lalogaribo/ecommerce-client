import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button type="submit" onClick={handleSubmit} className="btn-block">
      {title}
    </button>
  );
};

export default SubmitButton;
