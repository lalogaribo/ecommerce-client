import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/products">
            <Menu.Item
              name="products"
              active={activeItem === "products"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link>
            <Menu.Item
              name="about us"
              active={activeItem === "about us"}
              onClick={this.handleItemClick}
            />
          </Link>
          {this.props.user.isLoggedIn && this.props.user.user.is_admin && (
            <>
              <Link>
                <Menu.Item
                  name="Create product"
                  active={activeItem === "create product"}
                  onClick={this.handleItemClick}
                />
              </Link>
            </>
          )}
        </Menu>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Navbar);
