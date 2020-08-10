import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return (
    <div>
      <p className="alert alert-danger" role="alert">
        {error}
      </p>
    </div>
  );
};

export default ErrorMessage;
