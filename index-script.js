var mql = window.matchMedia("(max-width: 390px)");

function radioClicked(clickedRadioID) {
  currentRadioID = clickedRadioID;
  image1 = document.getElementById("carouselImage1");
  image2 = document.getElementById("carouselImage2");
  image3 = document.getElementById("carouselImage3");
  image4 = document.getElementById("carouselImage4");
  image5 = document.getElementById("carouselImage5");

  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";

  if (clickedRadioID == "radio1") {
    image1.style.display = "block";
    image1.style.opacity = 1;
  } else if (clickedRadioID == "radio2") {
    image2.style.display = "block";
    image2.style.opacity = 1;
  } else if (clickedRadioID == "radio3") {
    image3.style.display = "block";
    image3.style.opacity = 1;
  } else if (clickedRadioID == "radio4") {
    image4.style.display = "block";
    image4.style.opacity = 1;
  } else {
    image5.style.display = "block";
    image5.style.opacity = 1;
  }

  if (clickedRadioID != previousRadioID) {
    document.querySelector(
      "#" + clickedRadioID + " > .fa-square"
    ).style.backgroundColor = "white";
    document.querySelector(
      "#" + previousRadioID + "> .fa-square"
    ).style.backgroundColor = "transparent";
  }
  previousRadioID = clickedRadioID;
}

function leftarrowClicked() {
  var prevRadioID;
  if (currentRadioID == "radio1") {
    prevRadioID = "radio5";
  } else if (currentRadioID == "radio2") {
    prevRadioID = "radio1";
  } else if (currentRadioID == "radio3") {
    prevRadioID = "radio2";
  } else if (currentRadioID == "radio4") {
    prevRadioID = "radio3";
  } else {
    prevRadioID = "radio4";
  }
  document.getElementById(prevRadioID).click();
}

function rightarrowClicked() {
  var nextRadioID;
  if (currentRadioID == "radio1") {
    nextRadioID = "radio2";
  } else if (currentRadioID == "radio2") {
    nextRadioID = "radio3";
  } else if (currentRadioID == "radio3") {
    nextRadioID = "radio4";
  } else if (currentRadioID == "radio4") {
    nextRadioID = "radio5";
  } else {
    nextRadioID = "radio1";
  }
  document.getElementById(nextRadioID).click();
}

function stopCarousel(id) {
  clearInterval(id);
  console.log("inside stop carousel");
}

if (!mql.matches) {
  function imageAnimate1() {
    document.getElementById("radio1").click();
  }

  function imageAnimate2() {
    document.getElementById("radio2").click();
  }

  function imageAnimate3() {
    document.getElementById("radio3").click();
  }

  function imageAnimate4() {
    document.getElementById("radio4").click();
  }

  function imageAnimate5() {
    document.getElementById("radio5").click();
  }

  function animateCarousel() {
    setTimeout(imageAnimate2, 5000);
    id2 = setInterval(imageAnimate2, 25000);
    clearInterval(id2);

    setTimeout(imageAnimate3, 10000);
    id3 = setInterval(imageAnimate3, 25000);
    clearInterval(id3);

    setTimeout(imageAnimate4, 15000);
    id4 = setInterval(imageAnimate4, 25000);
    clearInterval(id4);

    setTimeout(imageAnimate5, 20000);
    id5 = setInterval(imageAnimate5, 25000);
    clearInterval(id5);

    setTimeout(imageAnimate1, 25000);
    id1 = setInterval(imageAnimate1, 25000);
    clearInterval(id1);
  }

  var previousRadioID = "radio5";
  var currentRadioID = "radio1";
  document.getElementById("radio1").click();

  setTimeout(animateCarousel, 0);
  var idAnimateCarousel = setInterval(animateCarousel, 25000);
} else {
  stopCarousel(idAnimateCarousel);
}
