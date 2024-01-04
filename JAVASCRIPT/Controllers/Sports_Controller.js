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
        class="movie-container col-3 col-md-6 col-sm-12 mb-3 c1"
        style="width: 18rem"
       
      ><div class="card-body Mcard">
        <img
          src="${i.sports_poster}"
          class="card-img-top"
          alt="..."
        />
        <h3 class="card-title">${i.sportName}</h3>
        <a href="#" class="movie_explore">Explore</a>
      </div></div>`;
        $(".Sports-container").append(card);
        $(".row").append(card);
      }
    })
    .catch(() => {});
});
