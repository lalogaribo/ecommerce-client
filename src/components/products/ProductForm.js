import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import validateProduct from "../../services/validateProduct";
import useForm from "../../hooks/useForm";
import Type from "../../services/Type";
import {productCreation} from "../../redux/products/products.actions";
import "react-toastify/dist/ReactToastify.css";
import "./products.css";
import AdminSideBar from "../shared/AdminSideBar";

const INITIAL_STATE = {
	name: "",
	quantity: "",
	price: "",
	time_to_make: "",
	description: "",
	image: "",
};

function ProductForm({productCreation, currentUser}) {

	const adminHeaders = {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: localStorage.getItem("jwt"),
	};

	const [value, setValue] = useState("");
	const [typeId, setTypeId] = useState("");
	const [types, setTypes] = useState([]);

	useEffect(() => {
		Type.types.getTypes().then((types) => {
			setTypes(types.data);
		});
	}, []);

	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting,
	} = useForm(INITIAL_STATE, validateProduct, createProduct);

	function createProduct() {
		values.type_id = typeId
		productCreation(values, adminHeaders, currentUser.user.id, adminHeaders)
	}

	function handleSelect(event) {
		let selectedType = types.find((type) => type.name === event.target.value);
		setTypeId(selectedType.id);
		setValue(event.target.value);
	}

	return (
		<div className="main-container">
			<div className="sidebar">
				<AdminSideBar/>
			</div>
			<div className="container">
				<form onSubmit={handleSubmit} id="form-container">
					<input
						type="text"
						placeholder="Product name"
						name="name"
						value={values.name}
						className={errors.name && "error-input"}
						onChange={handleChange}
						onBlur={handleBlur}
						id="inputs"
					/>{" "}
					<br/>
					{errors.name && <p className="error-text">{errors.name}</p>}
					<textarea
						type="text"
						placeholder="Description..."
						name="description"
						value={values.description}
						className={errors.description && "error-input"}
						onChange={handleChange}
						onBlur={handleBlur}
						rows="4"
						cols="50"
					/>{" "}
					<br/>
					{errors.description && (
						<p className="error-text">{errors.description}</p>
					)}
					<div className="options">
						<input
							type="text"
							placeholder="Quantity..."
							name="quantity"
							value={values.quantity}
							className={errors.quantity && "error-input"}
							onChange={handleChange}
							onBlur={handleBlur}
						/>{" "}
						<br/>
						{errors.quantity && <p className="error-text">{errors.quantity}</p>}
						<input
							type="text"
							placeholder="Time to make..."
							name="time_to_make"
							value={values.time_to_make}
							className={errors.time_to_make && "error-input"}
							onChange={handleChange}
							onBlur={handleBlur}
						/>{" "}
						<br/>
						{errors.time_to_make && (
							<p className="error-text">{errors.time_to_make}</p>
						)}{" "}
						<br/>
					</div>
					<div className="options">
						<input
							type="text"
							placeholder="Set price"
							name="price"
							value={values.price}
							className={errors.price && "error-input"}
							onChange={handleChange}
							onBlur={handleBlur}
						/>{" "}
						<br/>
						{errors.price && <p className="error-text">{errors.price}</p>}
						<br/>
						<input
							type="text"
							placeholder="Image..."
							name="image"
							value={values.image}
							className={errors.image && "error-input"}
							onChange={handleChange}
							onBlur={handleBlur}
						/>{" "}
					</div>
					{!types.length ? (<p>Loading categories...</p>)
						: (
							<>
								<select
									value={value}
									onChange={handleSelect}
									className="ui selection dropdown"
								>
									{types.map((type) => {
										return <option value={type.name}>{type.name}</option>;
									})}
								</select>
							</>
						)
					}
					<br/>
					{errors.image && <p className="error-text">{errors.image}</p>}
					<button type="submit" class="button">
						Create product
					</button>
				</form>
			</div>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentUser: state.user,
	};
};



export default connect(mapStateToProps, {productCreation})(ProductForm);
