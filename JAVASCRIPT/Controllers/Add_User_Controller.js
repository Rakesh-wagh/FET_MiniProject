import UserService from "../Services/Add_User_Service.js";
import User from "../Models/User.js";

// Main Function
$(document).ready(function () {
  // $("#register").click(function () {
  $(document).on("click", ".register_button", function () {
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
      alert("Password Not Matched !!");
      return false;
    }

    // validation
    if (!name || !email || !phone || !gender || !city || !state || !password) {
      alert("All fields marked with * are required.");
      return;
    }
    if (name.trim() === "") {
      alert("Full Name is required");
      return false;
    }
    // Example email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email");
      return false;
    }
    // Example phone number validation (assuming a 10-digit phone number)
    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid Phone Number");
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
    alert("User Created Successfully");
    //call service method
    UserService.addUsersDetails(user)
      .then((response) => {
        window.location.href = "../HTML/Login.html";
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  });
});
