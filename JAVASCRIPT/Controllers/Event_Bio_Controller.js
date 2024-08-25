import EventService from "../Services/Events_Service.js";

$(document).ready(function () {
  const urlparams = new URLSearchParams(window.location.search);
  const eventId = urlparams.get("id");
  EventService.geteventDetailsbyid(eventId).then((response) => {
    let data = response;
    console.log(data);
    let About = `<span>${data.about_event}</span>`;
    let image = `<img src="${data.event_poster}">`;
    let event_title = `<h4 class="eventName">${data.event_name}</h4>`;
    let artistname = `<h4 class="artistName">${data.artist_name}</h4>`;
    let venue = `<h5 class="venue">${data.venue}</h5>`;
    let date = `<h6 class="date">${data.date}</h6>`;
    let ticket_price = `<h6 class="ticket_price">${data.ticket_price}</h6>`;
    let time = `<h6 class="time">${data.time}</h6>`;
    let terms_and_conditions = `<p class="terms_and_conditions">${data.terms_and_conditions}</p>`;

    //redirect artist id
    let artists = data.artist_name;
    artists.forEach((element) => {
      let artistimg = `<img src="${element.img}" id="artistimg"  record-id=${element.id}>`;
      $(".outer-container").append(artistimg);
    });

    // end
    let btn = `<a id="Book_event" class="Book btn btn-warning" eventId=${data.id}>
      Book Ticket
    </a>`;
    $(".right").append(event_title);
    $(".right").append(artistname);
    $(".right").append(venue);
    $(".right").append(date);

    $(".right").append(time);
    $(".right").append(ticket_price);
    $(".right").append(btn);
    $(".description").append(About);
    $(".description1").append(terms_and_conditions);
    $(".left-card").append(image);
    let bannerImg = `<img src="../IMAGES/bg image/the notebook-bg.jfif" id="sportimg" style="opacity:0.7"  ></img>`;
    $(".main").append(bannerImg);

    $(document).on("click", "#artistimg", function () {
      let CId = $(this).attr("record-id");
      window.location.href =
        "../../HTML/Artist_Page.html?Mid=" + eventId + "?cid=" + CId;
    });
    $(document).on("click", "#Book_event", function () {
      if (sessionStorage.getItem("loggedIn") === "true") {
        const MId = $(this).attr("eventId");
        window.location.href = "../../HTML/Event_Alloaction.html?id=" + MId;
      } else {
        window.location.href = "../../HTML/Login.html";
      }
    });
  });
});
