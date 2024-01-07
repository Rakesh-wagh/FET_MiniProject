import SportService from "../Services/Sports_Service.js";

$(document).ready(function () {
  const urlparams = new URLSearchParams(window.location.search);
  const sportId = urlparams.get("id");
  SportService.getsportDetailsbyid(sportId).then((response) => {
    let data = response;
    console.log(data);
    let About = `<span>${data.about}</span>`;
    // let image = `<img src="${data.event_poster}">`;
    let sport_title = `<h4 class="eventName">${data.sportName}</h4>`;
    // let artistname = `<h4 class="artistName">${data.artist_name}</h4>`;
    let venue = `<h5 class="venue">${data.place}</h5>`;
    let date = `<h6 class="date">${data.date}</h6>`;
    let ticket_price = `<h6 class="ticket_price">${data.ticket_price}</h6>`;
    let time = `<h6 class="time">${data.time}</h6>`;
    let terms_and_conditions = `<p class="terms_and_conditions">${data.terms_and_conditions}</p>`;
    let banner = `<img src="${data.sports_poster}" id=bannerimg>`;

    // end
    let btn = `<a id="Book" class="Book btn btn-warning" sportId=${data.id}>
    Book Ticket
  </a>`;
    $(".right").append(sport_title);
    $(".right").append(venue);
    $(".right").append(date);

    $(".right").append(time);
    $(".right").append(ticket_price);
    $(".right").append(btn);
    $(".description").append(About);
    $(".description1").append(terms_and_conditions);
    $(".left-card").append(banner);
    let bannerImg = `<img src="../IMAGES/bg image/the notebook-bg.jfif" id="sportimg" style="opacity:0.7"  ></img>`;
    $(".main").append(bannerImg);

    $(document).on("click", "#sportimg", function () {
      let CId = $(this).attr("record-id");
      window.location.href =
        "../../HTML/Sports_Bio.html?Mid=" + sportId + "?cid=" + CId;
    });
    $(document).on("click", "#Book", function () {
      if (sessionStorage.getItem("loggedIn") === "true") {
        const MId = $(this).attr("sportId");
        window.location.href = "../HTML/Sport_Allocation.html?id=" + MId;
      } else {
        window.location.href = "../../HTML/Login.html";
      }
    });
  });
});
