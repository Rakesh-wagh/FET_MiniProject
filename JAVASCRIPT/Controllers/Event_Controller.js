import EventService from "../Services/Events_Service.js";
// Fetching data from json
$(document).ready(() => {
  EventService.geteventDetails()
    .then((response) => {
      let data = response.data;
      for (let i of data) {
        let card = `<div
        class="movie-container col-3 col-md-6 col-sm-12 mb-3 c1"
        style="width: 18rem"
      ><div class="card-body ">
        <img
          src="${i.event_poster}"
          class="card-img-top"
          alt="..."
        />
        <h3 class="card-title">${i.event_name}</h3>
        <a href="#" class="movie_explore">Explore</a>
      </div></div>`;
        $(".row").append(card);
      }
    })
    .catch(() => {});
});
