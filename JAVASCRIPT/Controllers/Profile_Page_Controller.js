import UserService from "../Services/Add_User_Service.js";
$(document).ready(function () {
  let uid = sessionStorage.getItem("Id");
  //   console.log(uid);
  UserService.getUserDetailsbyid(uid)
    .then((res) => {
      $("#fname").text(res._FullName);
      $("#email").text(res._email);
      $("#full").val(res._FullName);
      $("#emailid").val(res._email);
      $("#phone").val(res._phone);
      $("#gender").val(res._gender);
      $("#address").val(res._address);
      $("#state").val(res._state);
      $("#city").val(res._city);
    })
    .catch((err) => {
      console.log(err);
    });
});
