import MovieService from "../Services/Movies_Service.js";

$(document).ready(function () {
  const urlparams = new URLSearchParams(window.location.search);
  const movieId = urlparams.get("id");
  console.log(movieId);
  MovieService.getmovieDetailsbyid(movieId)
    .then((response) => {
      let data = response;
      console.log(data);
      console.log(data.description);
      let About = `<span>${data.description}</span>`;
      $(".description").append(About);
      let image = `<img src="${data.img}">`;
      $(".left-card").append(image);
      let castdata = data.cast;
      console.log(castdata);
    })
    .catch((error) => {
      console.log(error);
    });
});
