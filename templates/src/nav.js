function navs() {
// const nav_div = document.querySelector("#navbar")
const nav_div = document.getElementById("navbar")
nav_div.insertAdjacentHTML("beforebegin",
`
<header>

  <body>
    <div class="app">
      <div class="header-container">
        <div class="container">
          <div class="header-section d-flex justify-content-between align-items-center">
            <div class="header-logo">
              <a href="/">
                <img src="img/logo-light.png">
              </a>
            </div>
            <div class="header-menu">
              <ul class="nav nav-light">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="story">
                    Story
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="timers">
                    Timer
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="login">
                    Login/Signup
                  </a>
                </li>
              </ul>
              <div class="mobile-menu">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
</header>


<button class="dark-mode-toggle" onclick="LDmode()">|</button>
</nav>
`
)
}
navs()