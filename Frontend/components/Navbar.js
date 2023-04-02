let Navbar = () => {
  return `
    <nav id="nav" class="nav">
    <div class="container" id="container">
      <div class="logo">
        <a id="logo-href" href="#"
          ><img style="heigth:65px; width:65px" id="nav-logo"  src="#" alt=""
        /></a>
      </div>
      <div id="mainListDiv" class="main_list">
        <ul id="navlinks" class="navlinks">
          <li><a id="bookhref" href="#">Book Appointment</a></li>
          <li><a id="viewhref" href="#"> View Appointment</a></li>
          <li><a id="contacthref" href="#">Contact US</a></li>
          <li><a id="loginhref" href="#">Login</a></li>
        </ul>
      </div>
      <span id="navTrigger" class="navTrigger">
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
