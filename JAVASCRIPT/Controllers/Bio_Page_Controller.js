import MovieService from "../Services/Movies_Service.js";

$(document)
  .ready(function () {
    const urlparams = new URLSearchParams(window.location.search);
    const movieId = urlparams.get("id");
    console.log(movieId);
    MovieService.getmovieDetailsbyid(movieId).then((response) => {
      let data = response;
      console.log(data);
      console.log(data.description);
      let About = `<span>${data.description}</span>`;
      $(".description").append(About);
      let btn = `<a href="./Seat_Allocation.html" class="Book btn btn-primary" categoryId=${data.id}>
      Book Ticket
    </a>`;
      $(".right").append(btn);
      let image = `<img src="${data.img}">`;
      $(".left-card").append(image);
      let castdata = data.cast;
      console.log(castdata);
    });
    $(".Book").click(function () {
      const Id = $(this).attr("categoryId");
      window.location.href = "Seat_Allocation.html?id=" + Id;
    });
  })
  .catch((error) => {
    console.log(error);
  });
