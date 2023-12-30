import UserService from "../Services/Add_User_Service.js";

$(document).ready(function () {
  let password = "";
  let email = $("#email").val();
  let password1 = $("#password").val();
  let password2 = $("#cpassword").val();
  if (password1 !== password2) {
    alert("Password Do Not Match. Please Re-enter");
    return;
  } else {
    password = $("#cpassword").val();
  }
  let data = {
    email,
    password,
  };
  $(document).on("click", "#update", function () {
    // call to service
    UserService.updatePassword(data)
      .then((res) => {
        window.location.href = "../../html/Login.html";
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
