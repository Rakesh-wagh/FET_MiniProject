import SportService from "../Services/Sports_Service.js";

$(document).ready(function () {
  const urlparams = new URLSearchParams(window.location.search);
  const sportId = urlparams.get("id");

  SportService.getsportDetailsbyid(sportId).then((response) => {
    let sportDetails = response;

    let h2 = `<h2>${sportDetails.sportName}</h2>`;
    $(".event-details").append(h2);
    let proceedBtn = `<button id="proceed-btn" eventId="${sportDetails.id}">Proceed</button>`;
    $(".proceed").append(proceedBtn);

    $(document).on("click", "#proceed-btn", function () {
      const Id = $(this).attr("eventId");
      // console.log(event_total
      window.location.href = "Feedback1.html?id=" + Id;
    });
  });
});
