"use strict";

// locations

let imagesAfrica = [
  {
    imageDescription: "Swaziland landscape 1",
    imageSelection: "Swaziland.JPG"
  },

  {
    imageDescription: "Swaziland landscape 2",
    imageSelection: "Swaziland_landscape.JPG"
  },

  {
    imageDescription: "Swaziland landscape 3",
    imageSelection: "Swaziland_landscape2.JPG"
  },

  {
    imageDescription: "Swaziland Kid's Health Center",
    imageSelection: "Swaziland_Kids_Health_Center.jpg"
  },

  {
    imageDescription: "Swaziland Kid's Health Center 2",
    imageSelection: "Swaziland_Kids_Health_Center2.jpg"
  }
];

$(function() {
  let currentImage = 0;
  setImage(currentImage);

  //image container
  let imageContainer = document.querySelector(".js-images-container");
  imageContainer.style.transform = "translateX(" + currentImage + "px)";
  //next button
  let nextPage = document.querySelector(".next-page");

  nextPage.addEventListener("click", event => {
    event.preventDefault();

    imageContainer.style.transition = "transform .4s ease-in-out";
    console.log("works!!!");
    currentImage++;
    console.log(currentImage);
    imageContainer.style.transform = "translateX(" + currentImage + "px)";

    if (currentImage === imagesAfrica.length) {
      currentImage = 0;
    }
    setImage(currentImage);
    console.log("works");
  });

  // previous button
  let prevPage = document.querySelector(".prev-page");
  prevPage.addEventListener("click", event => {
    event.preventDefault();
    console.log("works");
    //event.preventDefault();
    imageContainer.style.transition = "transform 11s ease-in-out";
    currentImage--;
    imageContainer.style.transform = "translateX(" + currentImage + "px)";
    if (currentImage < 0) {
      currentImage = imagesAfrica.length - 1;
    }
    setImage(currentImage);
  });
});

//function that establishes an image over to the designated picture
const setImage = idx => {
  let image = imagesAfrica[idx];
  let imageContainer = $(".js-images-container");

  imageContainer.css("background-image", `url(${image.imageSelection})`);
  imageContainer.css("color", "#fff");
  imageContainer.css("font-size", "20px");
  $(".image-description").text(`${image.imageDescription}`);
};

const responsiveSite = document.querySelector(".responsive");
responsiveSite.addEventListener("click", function() {
  console.log("works");
  window.open("https://fewd-fylo-landing-page.netlify.com", "_blank");
});

const webSite = document.querySelector(".web-site");
const modal = document.querySelector(".modal");
const websitePortfolio = document.querySelector(".pop-up-portfolio");

webSite.addEventListener("click", function() {
  modal.style.display = "block";
  //  window.open("https://jacobwebsite.netlify.com", "_blank");
});

const closeModal = document.querySelector(".modal_close-bar");
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

const quizApp = document.querySelector(".quiz-app");
quizApp.addEventListener("click", function() {
  window.open("https://javascriptquizapp.netlify.com", "_blank");
});

const bootStrap = document.querySelector(".bootstrap");
bootStrap.addEventListener("click", function() {
  window.open("https://harmonyhotel.nfshost.com/", "_blank");
});

function createListItem(text) {
  let li = document.createElement("li");
  li.textContent = text;
}
function appendChildren(parent, children) {
  children.forEach(function(child) {
    parent.appendChild(child);
  });
}
/*
window.onload = function() {
  document.querySelector(".modal").style.display = "none";
};

let myList = document.getElementsByClassName("pop-up-portfolio");

let portfolio = document.getElementsByClassName("home-portfolio");

portfolio.addEventListener("click", function(e) {
  let quizApp = document.querySelector(".quiz-app");
  let webSite = document.querySelector(".web-site");
  let responsiveSite = document.querySelector(".responsive");

  //variable to store selected element
  e = e || window.event;
  let target = e.target || e.srcElement;
  //let target = e.target.tagName;
  console.log(target);
  //selectPortfolio(target);
});

function selectedElement(e) {
  const clickedElement = e.target.element;
  alert(clickedElement);
}
function selectPortfolio(element) {
  const strWindowFeatures =
    "location=yes,height=570,width=520,scrollbars=yes,status=yes";
  if (element == ".quiz-app") {
    window.open("javascriptquizapp.netlify.com", "_blank", strWindowFeatures);
  } else if (element == ".web-site") {
    window.open(
      "https://jacobwebsite.netlify.com",
      "_blank",
      strWindowFeatures
    );
  } else {
  }
}
*/
const locations = [
  {
    name: "Washington DC",
    position: { lat: 38.88974, lng: -77.0143747 }
  },

  {
    name: "Northern Ireland",
    position: { lat: 54.7877, lng: -6.4923 },
    content: "Giants Causeway 06/12/19"
  },

  {
    name: "Swaziland",
    position: { lat: -26.3054, lng: 31.1367 },
    content: "Sidvokodvo, Swaziland"
  },

  {
    name: "South Africa",
    position: { lat: -26.2041, lng: 28.0473 },
    content: "Johannesburg, South Africa 10/01/2017"
  },

  {
    name: "Hawaii",
    position: { lat: 19.8968, lng: -155.5828 },
    content: "Honolulu, HI"
  },

  {
    name: "Philippines",
    position: { lat: 12.8797, lng: 121.774 },
    content: "Manila, Philippines"
  },

  {
    name: "Ireland",
    position: { lat: 53.3498, lng: -6.2603 },
    content: "Dublin, Ireland"
  }
];

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: locations[0].position
  });

  for (let location of locations) {
    const marker = new google.maps.Marker({
      position: location.position,
      map
    });
    if (location.content) {
      const popup = new google.maps.InfoWindow({
        content: location.content
      });
      // adding an event listener
      marker.addListener("click", function() {
        popup.open(map, marker); //two parameters position specified for zoomed area and
        //the marker of Ireland
      });
    }
  }
}
/*
function initMap() {
  const northernIreland = { lat: 54.7877, lng: -6.4923 }; //location of northernIreland
  const ireland = ; //location of Ireland
  const swaziland = ; //location of Swaziland
  const washingtonDC = { lat: 38.88974, lng: -77.0143747 }; //location of Washington DC
  const hawaii = ; //location of hawaii
  const philippines = {  };
  const southAfrica =


  const northernIrelandMarker = new google.maps.Marker({
    position: northernIreland,
    map: map
  });
  const irelandMarker = new google.maps.Marker({ position: ireland, map: map });
  const swazilandMarker = new google.maps.Marker({
    position: swaziland,
    map: map
  });
  const nwashingtonDCdMarker = new google.maps.Marker({
    position: washingtonDC,
    map: map
  });
  const hawaiidMarker = new google.maps.Marker({
    position: hawaii,
    map: map
  });
  const philippinesdMarker = new google.maps.Marker({
    position: philippines,
    map: map
  });
  const southAfricadMarker = new google.maps.Marker({
    position: southAfrica,
    map: map
  });

  // add a popup window
  const irelandPopup = new google.maps.InfoWindow({
    content: "Dublin, Ireland '\n' 06/12/19 "
  });

  // adding an event listener
  irelandMarker.addListener("click", function() {
    irelandPopup.open(map, irelandMarker); //two parameters position specified for zoomed area and
    //the marker of Ireland
  });

  const northernIrelandPopup = new google.maps.InfoWindow({
    content: "Giants Causeway 07/20/2019"
  });

  northernIrelandMarker.addListener("click", function() {
    northernIrelandPopup.open(map, northernIrelandMarker);
  });

  const swazilandPopup = new google.maps.InfoWindow({
    content: "Luke Commission 10/08/2017"
  });
  swazilandMarker.addListener("click", function() {
    swazilandPopup.open(map, swazilandMarker);
  });
}
*/
