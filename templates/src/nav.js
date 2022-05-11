
function navs() {
  // const nav_div = document.querySelector("#navbar")
  const nav_div = document.getElementById("navbar")
  nav_div.insertAdjacentHTML("beforebegin",
    `   
    <nav>
      <ul class="nav_link_list">
      <li class="nav_link">
      <a href="/" class="
      nav_link_a
      ">Home</a>
      </li>
      <li class="nav_link">
      <a href="about" class="
        nav_link_a
        ">About</a>
      </li>
      <li class="nav_link">
      <a href="story" class="
        nav_link_a
        ">Story</a>
      </li>
      <li class="nav_link">
      <a href="timers" class="
        nav_link_a
        ">Timer</a>
      </li>
      <li class="nav_link">
      <a href="login" class="
        nav_link_a 
        ">Login/Signup</a>
      </li>
      <li class="nav_link">
      <a href="custom" class="
        nav_link_a
        ">Custom</a>
      </li>


      <button class="dark-mode-toggle" onclick="LDmode()">|</button>
    </nav>
    `
  )
}
navs()
