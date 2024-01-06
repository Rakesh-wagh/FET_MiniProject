import EventService from "../Services/Events_Service.js";
// Fetching data from json
$(document).ready(() => {
  EventService.geteventDetails()
    .then((response) => {
      console.log(response);
      let data = response.data;
      for (let i of data) {
        let card = `
        <div
        class="<div
        class="movie-container col-3 col-md-6 col-sm-12 mb-3 c1"
        style="width: 18rem"
      ><div class="card-body ">
      <div class="card-image">
        <img
          src="${i.event_poster}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-content">
        
        <a href="#" class=" Go movie_explore" categoryId="${i.event_id}">Explore</a>
        </div>
      </div></div>`;
        $(".Event-container").append(card);
        $(".row").append(card);
      }
      //For redirection of movies
      $(".Go").click(function () {
        const Id = $(this).attr("categoryId");
        window.location.href = "Bio_Page.html?id=" + Id;
      });
    })
    .catch(() => {});
});
