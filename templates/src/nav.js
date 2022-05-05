const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<nav>
<ul class="nav_link_list">
  <li class="nav_link">
    <a href="index.html" class="
        nav_link_a
        link__hover-effect
        ">Home</a>
  </li>
  <li class="nav_link">
    <a href="about.html" class="
        nav_link_a
        link__hover-effect
        ">About</a>
  </li>
  <li class="nav_link">
    <a href="story.html" class="
        nav_link_a
        link__hover-effect
        ">Story</a>
  </li>
  <li class="nav_link">
    <a href="timers.html" class="
        nav_link_a
        link__hover-effect
        ">Timer</a>
  </li>
  <li class="nav_link">
    <a href="login.html" class="
        nav_link_a
        link__hover-effect
        "> Login/Signup</a>
  </li>

</nav>`;

document.body.appendChild(navTemplate.content)
