var clicked = 0;

function menuClick() {
  clicked = clicked + 1;

  var header = document.getElementById("headerHandheld");
  if (clicked % 2 != 0) {
    header.style.height = "20.5rem";
    document.getElementById("btnHomeDrop").style.display = "block";
    document.getElementById("btnWorkDrop").style.display = "block";
    document.getElementById("btnContactDrop").style.display = "block";
    document.getElementById("btnAboutDrop").style.display = "block";
  } else {
    header.style.height = "4.3rem";
    document.getElementById("btnHomeDrop").style.display = "none";
    document.getElementById("btnWorkDrop").style.display = "none";
    document.getElementById("btnContactDrop").style.display = "none";
    document.getElementById("btnAboutDrop").style.display = "none";
  }
}

function carouselAnimate1() {
  document.getElementById("radio1").click();
}

function carouselAnimate2() {
  document.getElementById("radio2").click();
}

function carouselAnimate3() {
  document.getElementById("radio3").click();
}

function carouselAnimate4() {
  document.getElementById("radio4").click();
}

function carouselAnimate5() {
  document.getElementById("radio5").click();
}

function animateCarousel() {
  setTimeout(carouselAnimate2, 5000);
  id2 = setInterval(carouselAnimate2, 25000);
  clearInterval(id2);

  setTimeout(carouselAnimate3, 10000);
  id3 = setInterval(carouselAnimate3, 25000);
  clearInterval(id3);

  setTimeout(carouselAnimate4, 15000);
  id4 = setInterval(carouselAnimate4, 25000);
  clearInterval(id4);

  setTimeout(carouselAnimate5, 20000);
  id5 = setInterval(carouselAnimate5, 25000);
  clearInterval(id5);

  setTimeout(carouselAnimate1, 25000);
  id1 = setInterval(carouselAnimate1, 25000);
  clearInterval(id1);
}

setTimeout(animateCarousel, 0);
idAnimateCarousel = setInterval(animateCarousel, 25000);

function stopCarousel(id) {
  clearInterval(id);
  console.log("inside stop carousel");
}

var previousRadioID = "radio5";
var currentRadioID = "radio1";
document.getElementById("radio1").click();

function radioClicked(clickedRadioID) {
  currentRadioID = clickedRadioID;
  if (clickedRadioID == "radio1") {
    document.getElementById("leftArrow").style.display = "none";
    document.getElementById("rightArrow").style.display = "block";
  } else if (clickedRadioID == "radio5") {
    document.getElementById("rightArrow").style.display = "none";
    document.getElementById("leftArrow").style.display = "block";
  } else {
    document.getElementById("leftArrow").style.display = "block";
    document.getElementById("rightArrow").style.display = "block";
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
  if (currentRadioID == "radio2") {
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
  } else {
    nextRadioID = "radio5";
  }
  document.getElementById(nextRadioID).click();
}

/*document
  .getElementById("carousel")
  .addEventListener("mouseover", stopCarousel(idAnimateCarousel));*/
