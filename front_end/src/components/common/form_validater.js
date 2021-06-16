export default function formValidater(value) {
  console.log(value);
  let error = {};

  if (!value.user_id.trim()) {
    error.user_id = "Username required";
  }
  // -------------
  if (value.id.length < 7) {
    console.log(value.id);
    error.id = "아이뒤를 7자 이상 써주세요";
  }
  // if (!value.id) {
  //   error.id = "Password is required";
  // } else if (value.password.length < 6) {
  //   error.id = "Password needs to be 6 characters or more";
  // }

  // --------

  if (!value.user_id.trim()) {
    error.user_id = "Username required";
  }

  if (!value.password) {
    error.password = "Password is required";
  } else if (value.password.length < 6) {
    error.password = "Password needs to be 6 characters or more";
  }
  return error;
}
