let selectedSeats = 0;
let seatCost = 0;

function showSeatSelection() {
  const seatSelection = document.querySelector(".seat-selection");
  seatSelection.style.display = "block";
}

function updateTotal() {
  const numSeats = parseInt(document.getElementById("num-seats").value);
  document.getElementById("total-seats").textContent = numSeats;
  document.getElementById("total-cost").textContent = (
    numSeats * seatCost
  ).toFixed(2);
}

function increment() {
  const numSeatsInput = document.getElementById("num-seats");
  const numSeats = parseInt(numSeatsInput.value);
  numSeatsInput.value = numSeats + 1;
  updateTotal();
}

function decrement() {
  const numSeatsInput = document.getElementById("num-seats");
  const numSeats = parseInt(numSeatsInput.value);
  if (numSeats > 0) {
    numSeatsInput.value = numSeats - 1;
    updateTotal();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="seat-type"]');

  radioButtons.forEach(function (radio) {
    radio.addEventListener("change", function () {
      selectedSeats = 0;
      seatCost = 0;

      switch (this.value) {
        case "platinum":
          selectedSeats = 150;
          seatCost = 10000.0;
          break;
        case "silver":
          selectedSeats = 100;
          seatCost = 8500.0;
          break;
        case "gold":
          selectedSeats = 50;
          seatCost = 5000.0;
          break;
        default:
          break;
      }

      showSeatSelection();
      document.getElementById("num-seats").value = 0;
      updateTotal();
    });
  });
});
