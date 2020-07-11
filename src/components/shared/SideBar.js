import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getProductsByCategory} from '../../redux/products/products.actions'
import {connect} from "react-redux";
import "./shared.css";
import Filters from "./Filters";

const SideBar = ({getProductsByCategory, user, isLogged}) => {
	const [type, setType] = useState("");

	// useEffect(() => {
	// 	getProductsByCategory(type);
	// }, [type]);

	const handleChange = (e) => {
		setType(e.target.name);
		getProductsByCategory(type);
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
			{isLogged && user.is_admin && (
				<>
					<hr/>
					<Link to="/new-product">
						<button className="sidebar-option">Create product</button>
					</Link>
				</>
			)}
			<hr/>
			<Filters/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user.user,
		isLogged: state.user.isLoggedIn,
	};
};
export default connect(mapStateToProps, {getProductsByCategory})(SideBar);
