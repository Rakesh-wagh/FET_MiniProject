import MovieService from "../Services/Movies_Service.js";

$(document).ready(function () {
  const urlparams = new URLSearchParams(window.location.search);
  const movieId = urlparams.get("id");

  MovieService.getmovieDetailsbyid(movieId).then((response) => {
    let data = response;
    let About = `<span>${data.description}</span>`;
    let image = `<img src="${data.img}">`;
    let title = `<h4 class="subheading">${data.title}</h4>`;
    let genre = `<h4 class="genre">${data.genre}</h4>`;
    let rating = `<h4 class="rating">${data.rating}</h4>`;
    let banner = `<img src="${data.bg}" id=bannerimg>`;

    //redirect cast id
    let casts = data.cast;
    casts.forEach((element) => {
      let castimg = `<img src="${element.img}" id="castimg"  record-id=${element.id}>`;
      $(".outer-container").append(castimg);
    });
    // end
    let btn = `<a id="Book" class="Book btn btn-warning" movieId=${data.id}>
      Book Ticket
    </a>`;
    $(".right").append(title);

    $(".right").append(genre);
    $(".right").append(rating);
    $(".right").append(btn);
    $(".description").append(About);
    $(".left-card").append(image);
    $(".main").append(banner);

    $(document).on("click", "#castimg", function () {
      let CId = $(this).attr("record-id");
      window.location.href =
        "../../HTML/Artist_Page.html?Mid=" + movieId + "?cid=" + CId;
    });
    $(document).on("click", "#Book", function () {
      if (sessionStorage.getItem("loggedIn") === "true") {
        const MId = $(this).attr("movieId");
        window.location.href = "../../HTML/Theaters.html?id=" + MId;
      } else {
        window.location.href = "../../HTML/Login.html";
      }
    });
  });
});
