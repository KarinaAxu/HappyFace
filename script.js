
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);


const modal = document.getElementById("myLorm");

const openModalBtn = document.getElementById("openModalBtn");

const closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
function SubForm (){
  $.ajax({
    url:"https://api.apispreadsheets.com/data/NMA1EtG9r4Puygf1/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("Form Data Submitted :)")
    },
    error: function(){
      alert("There was an error :(")
    }
  });
}
function searchFunction() {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("myList");
  var h4 = ul.getElementsByTagName("h4");
  for (var i = 0; i < h4.length; i++) {
      var textValue = h4[i].innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
          h4[i].parentNode.parentNode.style.display = "";
      } else {
          h4[i].parentNode.parentNode.style.display = "none";
      }
  }
}

function searchFunction2() {
  var input = document.getElementById('miInput');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("myGist");
  var h4 = ul.getElementsByTagName("h4");
  for (var i = 0; i < h4.length; i++) {
      var textValue = h4[i].innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
          h4[i].parentNode.parentNode.style.display = "";
      } else {
          h4[i].parentNode.parentNode.style.display = "none";
      }
  }
}