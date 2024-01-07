import EventService from "../Services/Events_Service.js";

$(document).ready(function () {
  const urlparams = new URLSearchParams(window.location.search);
  const eventId = urlparams.get("id");

  EventService.geteventDetailsbyid(eventId).then((response) => {
    let eventDetails = response;

    // console.log(eventDetails.event_name);
    let h2 = `<h2>${eventDetails.event_name}</h2>`;
    $(".event-details").append(h2);
    // let event_total = $("#total-cost");
    // console.log(event_total.textContent);
    let proceedBtn = `<button id="proceed-btn" eventId="${eventDetails.id}">Proceed</button>`;
    $(".proceed").append(proceedBtn);

    $(document).on("click", "#proceed-btn", function () {
      const Id = $(this).attr("eventId");
      let event_total = $("#total-cost");
      console.log(event_total.textContent);
      window.location.href = "Feedback.html?id=" + Id + "?et=" + event_total;
    });
  });
});
