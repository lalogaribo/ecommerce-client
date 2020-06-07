export default function signUpFormValidations(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Password Errors
  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 5) {
    errors.password = "Password must be at least 6 characters";
  }
  // Password confirmation
  if (!values.password_confirmation) {
    errors.password_confirmation = "Password confirmation is required";
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "Password don't match";
  }
  // // First name errors
  if (!values.first_name) {
    errors.first_name = "First name is required";
  } else if (values.first_name < 3) {
    errors.first_name = "First name must be at least 3 characters long";
  }
  // // Last name errors
  if (!values.last_name) {
    errors.last_name = "Last name is required";
  } else if (values.last_name < 3) {
    errors.last_name = "Last name must be at least 3 characters long";
  }
  return errors;
}
