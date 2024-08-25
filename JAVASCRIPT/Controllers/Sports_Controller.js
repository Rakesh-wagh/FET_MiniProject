import SportService from "../Services/Sports_Service.js";
// Fetching data from json
$(document).ready(() => {
  SportService.getsportDetails()
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
          src="${i.sports_poster}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-content">
        
        <a href="#" class=" GoToSports movie_explore" sportId="${i.id}">Explore</a>
        </div>
      </div></div>`;
        $(".Sports-container").append(card);
        $(".row").append(card);
      }
      //For redirection of sports
      $(".GoToSports").click(function () {
        const SId = $(this).attr("sportId");
        window.location.href = "Sports_Bio.html?id=" + SId;
      });
    })
    .catch(() => {});
});
