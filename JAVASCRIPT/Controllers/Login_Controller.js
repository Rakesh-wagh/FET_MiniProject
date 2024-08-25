import UserService from "../Services/Add_User_Service.js";

$(document).ready(() => {
  $(document).on("click", "#loginForm", function () {
    let username = $("#username").val();
    let password = $("#password").val();

    // Validate email and password
    if (username === "" || password === "") {
      alert("Please enter both email and password");
      return false; // Prevent form submission
    }

    console.log(username, password);
    let ans = 0;

    UserService.getUserDetails()
      .then((response) => {
        let userData = response.data;
        for (let User of userData) {
          let uId = User._email;
          let pass = User._password;
          if (username === uId) {
            if (password === pass) {
              ans = 1;
              sessionStorage.setItem("Username", uId);
              sessionStorage.setItem("Id", User.id);
              sessionStorage.setItem("loggedIn", true);
              sessionStorage.setItem("Name", User._email);
              console.log(User._email);
              window.location.href = "index.html";
            }
            break;
          }
        }
        if (ans == 1) {
          alert("Successfully Logged In!!");
        } else {
          alert("Incorrect UserId or Password");
        }
      })
      .catch((error) => console.log(error));
  });
  $(document).on("click", "#Logout", function () {
    sessionStorage.clear();
  });
});
