import UserService from "../Services/Add_User_Service.js";
import User from "../Models/User.js";

// Main Function

$(document).ready(function () {
  // $("#register").click(function () {
  $(document).on("click", "#register", function () {
    let name = $("#name").val();
    let password = "";
    let password1 = $("#password").val();
    let password2 = $("#cpassword").val();
    let email = $("#email").val();
    let address = $("#address").val();
    let phone = $("#phone").val();
    let dob = $("#dob").val();
    let state = $("#state").val();
    let city = $("#city").val();
    let gender = "";
    if ($("#male").is(":checked")) {
      gender = $("#male").val();
    } else if ($("#female").is(":checked")) {
      gender = $("#female").val();
    } else {
      gender = $("#other").val();
    }
    if (password1 === password2) {
      password = $("#cpassword").val();
    } else {
      alert("Re-enter Your Password");
      return false;
    }
    // create model of User (class)
    let user = new User();
    user.FullName = name;
    user.email = email;
    user.gender = gender;
    user.date_of_birth = dob;
    user.password = password;
    user.address = address;
    user.phone = phone;
    user.state = state;
    user.city = city;

    //call service method
    UserService.addUsersDetails(user)
      .then((response) => {
        alert("User Created Successfully");
        window.location.href = "../../html/Login.html";
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  });
});
