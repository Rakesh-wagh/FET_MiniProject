import MovieService from "../Services/Movies_Service.js";
$(document).ready(function () {
  const urlparams = new URLSearchParams(window.location.search);
  const movieId = urlparams.get("Mid");
  //   console.log(movieId);
  let m_id = movieId.slice(0, 1);
  let c_id = movieId.slice(movieId.length - 1);
  console.log(m_id);
  console.log(c_id);

  MovieService.getmovieDetailsbyid(movieId)
    .then((response) => {
      let data = response;
      console.log(data);
      let cast = data.cast;
      let cinfo = cast[c_id];
      console.log(cinfo);
      let info = `<div class="row">
        <div class="col-md-6 col-lg-9">
          <div class="d-flex Aimg align-items-center">
            <img
              src="${cinfo.img}"
              alt="Artist Name"
              class="img-fluid artist-image m-3"
            />

            <div class="artist-info mx-3">
              <h2>${cinfo.Actor_name}</h2>
              <p><strong>Also Known As:</strong>${cinfo.Also_Known_As}</p>
              <p><strong>Occupation:</strong>${cinfo.Occupation}/p>
              <p><strong>Born:</strong>${cinfo.Born}</p>
              <p><strong>Birthplace:</strong>${cinfo.Birthplace}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-9">
          <div class="biography">
            <h3>Biography</h3>
            <p>
              ${cinfo.About}
            </p>
            
          </div>
        </div>
      </div>`;
      $(".artist-container").append(info);
      //   });
    })
    .catch((err) => {
      console.log(err);
    });
});
