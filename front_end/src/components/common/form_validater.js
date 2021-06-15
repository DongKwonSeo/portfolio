export default function formValidater(value) {
  let errors = {};

  if (!value.user_id.trim()) {
    errors.user_id = "Username required";
  }

  if (!value.password) {
    errors.password = "Password is required";
  } else if (value.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  return errors;
}
