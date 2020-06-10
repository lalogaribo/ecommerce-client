export default function validateProduct(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Product name is required";
  } else if (values.name.length < 5) {
    errors.name = "Name should be at least 5 characters long";
  }

  if (!values.description) {
    errors.description = "Description is required";
  } else if (values.description.length < 5) {
    errors.description = "description should be at least 5 characters long";
  }

  if (!values.quantity) {
    errors.quantity = "Quantity is required";
  } else if (values.quantity < 0) {
    errors.quantity = "Quantity should be at least 1";
  }

  if (!values.price) {
    errors.price = "Price is required";
  } else if (values.price < 0) {
    errors.price = "Price should be at least 1";
  }

  if (!values.time_to_make) {
    errors.time_to_make = "Creation time is required";
  } else if (values.time_to_make < 0) {
    errors.time_to_make = "Creation time should be at least 1 day";
  }

  if (!values.image) {
    errors.image = "Image is required";
  }
  return errors;
}
