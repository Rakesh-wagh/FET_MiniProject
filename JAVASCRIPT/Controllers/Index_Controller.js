import MovieService from "../Services/Movies_Service.js";
import EventService from "../Services/Events_Service.js";
import SportService from "../Services/Sports_Service.js";

// Fetching data from json
$(document).ready(() => {
  MovieService.getmovieDetails().then((response) => {
    let data = response.data;
    let count = 1;
    for (let i of data) {
      if (count > 4) {
        break;
      }
      count++;
      let card = `<div class="Mcard" >
      <img src="${i.img}" alt="Movie" />
      <h3>${i.title}</h3>
      <p >${i.genre}</p>
      <p >${i.language}</p>
     <a id="Go" class="Go stretched-link" categoryId="${i.id}"></a>
     
    </div>`;
      $(".Movie-container").append(card);
    }
    //For redirection of movies
    $(".Go").click(function () {
      const Id = $(this).attr("categoryId");
      window.location.href = "Bio_Page.html?id=" + Id;
    });
  });
  // For Fetching SportsData
  SportService.getsportDetails().then((response) => {
    let sdata = response.data;
    let scount = 1;
    for (let i of sdata) {
      if (scount > 4) {
        break;
      }
      scount++;
      let card = `<div class="Mcard" >
      <img src="${i.sports_poster}" alt="Movie" />
      <h3>${i.sportName}</h3>
      <p >${i.place}</p>
     <a id="GoToSports" class="Go stretched-link" categoryId="${i.sports_id}"></a>
     
    </div>`;
      $(".Sports-container").append(card);
    }
    //For redirection of sports
    $(".GoToSports").click(function () {
      const Id = $(this).attr("categoryId");
      window.location.href = "Bio_Page.html?id=" + Id;
    });
  });
  // For Fetching Event Data
  EventService.geteventDetails()
    .then((response) => {
      let data = response.data;
      let count = 1;
      for (let i of data) {
        if (count > 4) {
          break;
        }
        count++;
        let card = `<div class="Mcard" >
      <img src="${i.event_poster}" alt="Movie" />
      <h3>${i.event_name}</h3>
      <p >${i.artist_name}</p>
      <p >${i.ticket_price}</p>
     <a id="GoToEvents" class="Go stretched-link" categoryId="${i.id}"></a>
     
    </div>`;
        $(".Event-container").append(card);
      }
      //For redirection of events
      $(".GoToEvents").click(function () {
        const Id = $(this).attr("categoryId");
        window.location.href = "Bio_Page.html?id=" + Id;
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// ("use strict");

const addEventOnElements = function (elem, type, callback) {
  for (let i = 0, len = elem.length; i < len; i++) {
    elem[i].addEventListener(type, callback);
  }
};

/**
 * LOADING
 */

const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Navbar Toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElements(navbarLinks, "click", closeNavbar);

/**
 * HEADER
 */

// header will be active after scroll 200px of window

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 200
    ? header.classList.add("active")
    : header.classList.remove("active");
};

window.addEventListener("scroll", headerActive);

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
