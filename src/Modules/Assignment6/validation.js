export default function validation(values) {
  let errors = {};
  if (!values.fullname) {
    errors.fullname = "This is a required field";
  }
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "Password is too short";
  }
  return errors;
}
