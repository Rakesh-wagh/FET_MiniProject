import MovieService from "../Services/Movies_Service.js";
// Fetching data from json
$(document).ready(() => {
  MovieService.getmovieDetails()
    .then((response) => {
      let data = response.data;
      for (let i of data) {
        let card = `<div
        class="movie-container col-3 col-md-6 col-sm-12 mb-3 c1"
        style="width: 18rem"
      ><div class="card-body ">
        <img
          src="${i.img}"
          class="card-img-top"
          alt="..."
        />
        <h3 class="card-title">${i.title}</h3>
        <a id="Go" class="Go " categoryId="${i.id}">Explore</a>
      </div></div>`;
        $(".row").append(card);
      }
      $(".Go").click(function () {
        let Id = $(this).attr("categoryId");
        window.location.href = "Bio_Page.html?id=" + Id;
      });
    })
    .catch(() => {});
});

$(document).ready(function () {
  let params;
  $(document).on("click", ".checkbox", function () {
    let clicked = $(this).val();
    alert(clicked);
    //storing parameter value
    // let year_inp = $('input[name="year"]:checked').val();
    let genre_inp = clicked;
    let lange_inp = clicked;

    MovieService.getmovieDetails()
      .then((response) => {
        let movies = response.data;
        //filtering genre of movies
        if (genre_inp != null && genre_inp != undefined && genre_inp != "") {
          movies = movies.filter((movie) => movie.genre.includes(genre_inp));
          console.log(movies);

          let cards_container = "<div class='cards-container'></div>";
          $(".row").html(cards_container);
          for (let i of movies) {
            let card = `<div
                class="movie-container col-3 col-md-6 col-sm-12 mb-3 c1"
                style="width: 18rem"
              ><div class="card-body ">
                <img
                  src="${i.img}"
                  class="card-img-top"
                  alt="..."
                />
                <h3 class="card-title">${i.title}</h3>
                <a href="#" class="movie_explore">Explore</a>
              </div></div>`;
            $(".cards-container").append(card);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  $(document).on("click", ".button", function () {
    let value = $(".button").val();

    //common from this
    MovieService.getMovieDetailsbyFilter(params)
      .then((response) => {
        let movies = response.data;

        showCards(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
