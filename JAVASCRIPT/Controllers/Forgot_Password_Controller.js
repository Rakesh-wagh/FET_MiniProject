$(document).ready(function () {
  let email = $("#email").val();
  $(document).on("click", "#register", function () {
    console.log(email);
  });
});
