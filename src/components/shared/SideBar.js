// import { useBooleanKnob } from "@stardust-ui/docs-components";
import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../../actions/products";
import { connect } from "react-redux";
import "./shared.css";

const SideBar = ({ getProductsByCategory }) => {
  const [type, setType] = useState("");

  useEffect(() => {
    getProductsByCategory(type);
  }, [type]);

  const handleChange = (e) => {
    setType(e.target.name);
  };
  return (
    <div className="sidebar">
      <button className="sidebar-option" name="Stickers" onClick={handleChange}>
        Stickers
      </button>
      <button className="sidebar-option" name="Shirts" onClick={handleChange}>
        Shirts
      </button>
      <button className="sidebar-option" name="Dress" onClick={handleChange}>
        Dress
      </button>
      <button className="sidebar-option" name="Buttons" onClick={handleChange}>
        Buttons
      </button>
      <button
        className="sidebar-option"
        name="Posters/Prints"
        onClick={handleChange}
      >
        Posters/Prints
      </button>
      <button
        className="sidebar-option"
        name="Custome_others"
        onClick={handleChange}
      >
        Custome others
      </button>
      <button className="sidebar-option" name="Pants" onClick={handleChange}>
        Pants
      </button>
      <button
        className="sidebar-option"
        name="Outfit_dolls"
        onClick={handleChange}
      >
        Outfit dolls
      </button>
      <button
        className="sidebar-option"
        name="Hair_bows"
        onClick={handleChange}
      >
        Hair bows
      </button>
      <button className="sidebar-option" name="Pins" onClick={handleChange}>
        Pins
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductsByCategory: (type) => {
      dispatch(getProductsByCategory(type));
    },
  };
};
export default connect(null, mapDispatchToProps)(SideBar);
