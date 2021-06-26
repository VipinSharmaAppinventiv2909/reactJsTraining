export default function validation(values) {
    let errors = {};
  
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid!";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (!values.password.length < 6) {
      errors.password = "Password is too short";
    }
    return errors;
  }
  