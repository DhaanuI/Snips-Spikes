let Navbar = () => {
  return `
    <nav class="nav">
    <div class="container">
      <div class="logo">
        <a href="./index.html"
          ><img width="100%" height="100%" src="./images/logo.png" alt=""
        /></a>
      </div>
      <div id="mainListDiv" class="main_list">
        <ul class="navlinks">
          <li><a href="#">Book Appointment</a></li>
          <li><a href="#"> View Appointment</a></li>
          <li><a href="#">Contact US</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
      <span class="navTrigger">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </nav>
  <div id="visible1"></div>
    `;
};

export { Navbar };
