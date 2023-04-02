/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */
import { Navbar } from "../components/Navbar.js";
import Footer from "../components/Footer.js";

window.onload = () => {
  document.getElementById("nav-logo").src = "../images/logo.png";
  document.getElementById("logo-href").href = "../index.html";
  document.getElementById("bookhref").href = "gender.html";
  document.getElementById("viewhref").href = "../html/appointment.html";
  document.getElementById("contacthref").href = "../index.html";
  document.getElementById("loginhref").href = "../routes/loginSignup/login.html";
};

let nav = document.getElementById("NAVBAR");
nav.innerHTML = Navbar();

// copy nav container from index.html line 12 only
// In html file write like this "<script  type="module" src="./scripts/index.js"></script>" must include type=module

// Function used to shrink nav bar removing paddings and adding black background

window.addEventListener("scroll", function () {
  var navBar = document.querySelector(".nav");
  if (document.documentElement.scrollTop > 50) {
    navBar.classList.add("affix");
    console.log("Working");
  } else {
    navBar.classList.remove("affix");
  }
});

const myElement = document.getElementById("visible1");
var navBar = document.querySelector(".nav");

const observer = new IntersectionObserver((entries) => {
  const isVisible = entries[0].isIntersecting;
  if (!isVisible) {
    navBar.classList.add("affix");
    console.log("Working");
  } else {
    navBar.classList.remove("affix");
  }
});

observer.observe(myElement);

// Function to show and hide hamburger content

var navTrigger = document.querySelector(".navTrigger");
var mainListDiv = document.querySelector("#mainListDiv");

navTrigger.addEventListener("click", function () {
  navTrigger.classList.toggle("active");
  mainListDiv.classList.toggle("show_list");
  mainListDiv.style.display = "block";
});

/* --------------------------------- Footer --------------------------------- */
let footer = document.getElementById("footer-main");
footer.innerHTML = Footer();

/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */

/* -------------------------------- fetching -------------------------------- */

const card_div = document.querySelector(".card-service-page");

async function getData() {
  try {
    let data = await fetch("http://localhost:5500/services/male/");
    data = await data.json();
    renderData(data);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getData();

function getCard(data) {
  let formatedData = data.map((ele) => {
    return `
    <div class="card-service-page">
    <a  class="idlcass" id="${ele._id}" href="#"></a>
    <img
      class="service-card-images"
      src="${ele.image}"
      alt=""
    />
    <div class="card-overlay">
      <div class="title">
        <h3>${ele.name}</h3>
        <p>
        <svg
        height="0.7rem"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns:ns1="http://sozi.baierouge.fr"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        id="svg3611"
        sodipodi:docname="Indian_Rupee_symbol.svg"
        viewBox="0 0 169.76 250.39"
        version="1.1"
        inkscape:version="0.47 r22583"
      >
      <sodipodi:namedview
          id="base"
          bordercolor="#666666"
          inkscape:pageshadow="2"
          inkscape:window-y="-4"
          pagecolor="#ffffff"
          inkscape:window-height="712"
          inkscape:window-maximized="1"
          inkscape:zoom="5.3091607"
          inkscape:window-x="-4"
          showgrid="false"
          borderopacity="1.0"
          inkscape:current-layer="layer1"
          inkscape:cx="94.062924"
          inkscape:cy="212.24797"
          inkscape:window-width="1280"
          inkscape:pageopacity="0.0"
          inkscape:document-units="px"
      />
      <g
          id="layer1"
          inkscape:label="Layer 1"
          inkscape:groupmode="layer"
          transform="translate(0 -801.97)"
        >
        <path
            id="path4158"
            sodipodi:nodetypes="cccccccccccccccccccc"
            style="stroke:#000000;stroke-width:.099084;fill:#000000"
            d="m99.017 1052.3-90.577-113.33 0.5232-22.46c42.51 2.93 75.559-1.57 83.248-41.78l-90.578-0.52 14.66-24.55 72.253 1.04c-11.009-22.88-41.286-25.7-88.484-24.02l16.231-24.03 153.41-0.22927-15.184 23.731h-42.409c7.7512 8.1823 13.424 17.597 13.613 25.591l43.98-0.52226-15.184 23.502-29.32 0.52229c-4.5772 35.058-36.787 55.815-77.489 60.584l91.184 116.44-39.874 0.022v0.0004z"
        />
      </g
      >
      <metadata
        >
        <rdf:RDF
          >
          <cc:Work
            >
            <dc:format
              >image/svg+xml</dc:format
            >
            <dc:type
                rdf:resource="http://purl.org/dc/dcmitype/StillImage"
            />
            <cc:license
                rdf:resource="http://creativecommons.org/licenses/publicdomain/"
            />
            <dc:publisher
              >
              <cc:Agent
                  rdf:about="http://openclipart.org/"
                >
                <dc:title
                  >Openclipart</dc:title
                >
              </cc:Agent
              >
            </dc:publisher
            >
            <dc:title
              >Indian Rupee Symbol</dc:title
            >
            <dc:date
              >2010-07-23T08:59:26</dc:date
            >
            <dc:description
              >The clipart was generated as draft based on the  Symbol of Indian Rupee approved by the Union Cabinet on 15 July 2010. The Design for the symbol was submitted by D Udaya Kumar.&#13;\nSource :http://pib.nic.in/archieve/others/2010/jul/d2010071501.pdf</dc:description
            >
            <dc:source
              >https://openclipart.org/detail/74431/indian-rupee-symbol-by-netalloy</dc:source
            >
            <dc:creator
              >
              <cc:Agent
                >
                <dc:title
                  >netalloy</dc:title
                >
              </cc:Agent
              >
            </dc:creator
            >
            <dc:subject
              >
              <rdf:Bag
                >
                <rdf:li
                  >Indian Rupee Symbol</rdf:li
                >
              </rdf:Bag
              >
            </dc:subject
            >
          </cc:Work
          >
          <cc:License
              rdf:about="http://creativecommons.org/licenses/publicdomain/"
            >
            <cc:permits
                rdf:resource="http://creativecommons.org/ns#Reproduction"
            />
            <cc:permits
                rdf:resource="http://creativecommons.org/ns#Distribution"
            />
            <cc:permits
                rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
            />
          </cc:License
          >
        </rdf:RDF
        >
      </metadata
      >
    </svg
    >
         ${ele.price}
        </p>
      </div>
      <div class="card-body">
        <p >
          ${ele.description}
        </p>
      </div>
    </div>
  </div>
        `;
  });
  return formatedData.join("");
}

async function renderData(product_data) {
  console.log(product_data);
  let datadisplay = document.querySelector(".general-container-service-page");
  datadisplay.innerHTML = getCard(product_data);

  // bookapointment button

  let bookapointment = document.querySelectorAll(".idlcass");
  console.log(bookapointment);
  for (let btn of bookapointment) {
    btn.addEventListener("click", (event) => {
      // console.log(event.target)
      let product_id = event.target.id;
      getServiceDat(product_id);
    });
  }

  // // edit
}

async function getServiceDat(id) {
  try {
    let data = await fetch(`http://localhost:5500/services/male/${id}`);
    data = await data.json();
    sessionStorage.setItem("service_data", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
