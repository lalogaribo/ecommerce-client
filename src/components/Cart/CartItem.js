import React from "react";
import { connect } from "react-redux";
import {
  REMOVE_ITEM,
  INCREASE_ITEM_AMOUNT,
  DECREASE_ITEM_AMOUNT,
} from "../../actiontypes";
import "./cart.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  image: {
    width: 400,
    height: 400,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const CartItem = ({ cartItem, removeItem, increaseAmount, decreaseAmount }) => {
  const classes = useStyles();
  const { name, description, price, quantity, image, amount } = cartItem;
  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    In stock: {quantity}
                  </Typography>
                </Grid>
                <Grid item>
                  <ArrowDropUpIcon onClick={() => increaseAmount()} />
                </Grid>
                {amount}
                <Grid item>
                  <ArrowDropDownIcon
                    onClick={() => {
                      if (amount === 1) {
                        removeItem();
                      } else {
                        decreaseAmount();
                      }
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <span onClick={() => removeItem()}>Remove Item</span>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">${price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.cartItem;
  return {
    removeItem: () => dispatch({ type: REMOVE_ITEM, payload: { id } }),
    increaseAmount: () =>
      dispatch({ type: INCREASE_ITEM_AMOUNT, payload: { id } }),
    decreaseAmount: () =>
      dispatch({ type: DECREASE_ITEM_AMOUNT, payload: { id } }),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
