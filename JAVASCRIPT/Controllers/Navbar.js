// navbar.js
document.addEventListener("DOMContentLoaded", function () {
  let nav = `<header class="header" data-header style="position:relative">
      <div class="container">
        <a href="#" class="logo">
          <img src="../IMAGES/logo.png" width="148" height="38" alt="Logo" />
        </a>

        <nav class="navbar" data-navbar>
          <button
            class="nav-close-btn"
            aria-label="close menu"
            data-nav-toggler
          >
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          <a href="#" class="logo">
            <img
              src="../IMAGES/logo.png"
              width="148"
              height="38"
              alt="BookMe"
            />
          </a>

          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="#" class="navbar-link" data-nav-link>Home</a>
            </li>

            <li class="navbar-item">
              <a href="./Movie.html" class="navbar-link" data-nav-link
                >Movies</a
              >
            </li>

            <li class="navbar-item">
              <a href="./Sports.html" class="navbar-link" data-nav-link
                >Sports</a
              >
            </li>

            <li class="navbar-item">
              <a href="./Events.html" class="navbar-link" data-nav-link
                >Events</a
              >
            </li>
          </ul>
        </nav>
        <!-- Search Bar  -->
        <div
          class="input-group"
          style="border: 2px solid orange; border-radius: 5px; padding: 4px"
        >
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Search"
          />
          <button type="button" data-mdb-ripple-init>
            <i class="fas fa-search p-2"></i>
          </button>
        </div>
        <div class="header-action">
          <a href="./Login.html" class="btn btn-primary has-after" id="loginbtn"
            >Login</a
          >
        </div>

        <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

        <div class="overlay" data-overlay data-nav-toggler></div>
      </div>
    </header>`;
  $("body").prepend(nav);
});
