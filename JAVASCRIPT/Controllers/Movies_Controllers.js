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
      <div class="card-image">
        <img
          src="${i.img}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-content">
        
        <a href="#" class=" Go movie_explore" categoryId="${i.id}">Explore</a>
        </div>
      </div></div>`;
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

//filter
$(document).ready(function () {
  $(document).on("click", ".checkbox", function () {
    let clicked = $(this).val();
    // alert(clicked);
    //storing parameter value

    let genre_inp = clicked;
    let lange_inp = clicked;

    MovieService.getmovieDetails()
      .then((response) => {
        let movies = response.data;

        if (lange_inp != "" && lange_inp != undefined && lange_inp != null) {
          movies = movies.filter((movie) => movie.language.includes(lange_inp));
          console.log(movies);
        }

        //filtering genre of movies
        // alert(genre_inp);

        if (genre_inp != "" && genre_inp != undefined && genre_inp != null) {
          if (genre_inp != clicked && genre_inp != "All") {
            movies = movies.filter((movie) => movie.genre.includes(genre_inp));
            console.log(movies);
          }

          //filter by language

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
                <a href="#" class=" Go stretched-link movie_explore" categoryId="${i.id}" style="cursor: pointer;">Explore</a>
              </div></div>`;
            $(".cards-container").append(card);
          }
          //For redirection of movies
          $(".Go").click(function () {
            const Id = $(this).attr("categoryId");
            window.location.href = "Bio_Page.html?id=" + Id;
          });
        }
      })

      .catch((error) => {
        console.log(error);
      });
  });
});
