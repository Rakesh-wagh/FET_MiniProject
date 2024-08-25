import MovieService from "../Services/Movies_Service.js";
$(document).ready(function () {
  const container = document.querySelector(".container");
  const seats = document.querySelectorAll(".row .seat:not(.occupied)");
  const count = document.getElementById("count");
  const total = document.getElementById("total");
  const movieSelect = document.getElementById("mname");

  const urlparams = new URLSearchParams(window.location.search);
  const MId = urlparams.get("id");
  sessionStorage.setItem("Mid", MId);
  MovieService.getmovieDetailsbyid(MId)
    .then((res) => {
      $("#mname").text(res.title);
      let btn = `<a id="snackbtn" class="Book btn btn-primary movieId=${res.id}">
      Add Snacks
    </a>`;
      $(".movie-container").append(btn);
      let movieId = MId;
      console.log(movieId);
      $(document).on("click", "#snackbtn", function () {
        let abc = document.querySelectorAll(".selected").length - 1;
        let def = abc * ticketPrice;
        sessionStorage.setItem("seats", abc);

        window.location.href = "../../HTML/Snacks.html?total=" + def;
      });

      // start

      let ticketPrice = +200;

      //Update total and count
      function updateSelectedCount() {
        const selectedSeats = document.querySelectorAll(".row .seat.selected");
        const selectedSeatsCount = selectedSeats.length;
        count.innerText = selectedSeatsCount;
        total.innerText = selectedSeatsCount * ticketPrice;
      }

      //Movie Select Event
      movieSelect.addEventListener("change", (e) => {
        ticketPrice = +e.target.value;
        updateSelectedCount();
      });

      //Seat click event
      container.addEventListener("click", (e) => {
        if (
          e.target.classList.contains("seat") &&
          !e.target.classList.contains("occupied")
        ) {
          e.target.classList.toggle("selected");
        }
        updateSelectedCount();
      });
      //end
    })
    .catch((err) => {
      console.log(err);
    });
});
