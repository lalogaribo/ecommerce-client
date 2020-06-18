import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getProductsByMinPrice,
  getProductsByMaxPrice,
  getProductsByKeyword,
} from "../../actions/products";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./shared.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Filters({
  getProductsByMaxPrice,
  getProductsByMinPrice,
  getProductsByKeyword,
}) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [keyword, setKeyword] = useState("");
  const classes = useStyles();

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getProductsByKeyword(keyword);
  };

  const onMinSubmit = (e) => {
    e.preventDefault();
    getProductsByMinPrice(minPrice);
  };

  const onMaxSubmit = (e) => {
    e.preventDefault();
    getProductsByMaxPrice(maxPrice);
  };
  return (
    <div>
      <h4>Filter by</h4>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="standard-basic"
          label="keyword"
          name="keyword"
          onChange={handleKeyword}
        />
      </form>

      <form onSubmit={onMinSubmit} className={classes.root} autoComplete="off">
        <TextField
          id="standard-basic"
          label="min-price"
          name="min_price"
          onChange={handleMinPrice}
        />
      </form>
      <form onSubmit={onMaxSubmit} className={classes.root} autoComplete="off">
        <TextField
          id="standard-basic"
          label="max-price"
          name="max_price"
          onChange={handleMaxPrice}
        />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductsByMinPrice: (price) => {
      dispatch(getProductsByMinPrice(price));
    },
    getProductsByMaxPrice: (price) => {
      dispatch(getProductsByMaxPrice(price));
    },
    getProductsByKeyword: (keyword) => {
      dispatch(getProductsByKeyword(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Filters);
