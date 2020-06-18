import React from "react";
import "./shared.css";
export default function NotFound() {
  return (
    <div className="not-found-image">
      <img src={process.env.PUBLIC_URL + "/img/404_Error.jpg"} />
    </div>
  );
}
