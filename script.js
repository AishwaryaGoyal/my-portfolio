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

setTimeout(carouselAnimate1, 25000);
setInterval(carouselAnimate1, 25000);

setTimeout(carouselAnimate2, 5000);
setInterval(carouselAnimate2, 25000);

setTimeout(carouselAnimate3, 10000);
setInterval(carouselAnimate3, 25000);

setTimeout(carouselAnimate4, 15000);
setInterval(carouselAnimate4, 25000);

setTimeout(carouselAnimate5, 20000);
setInterval(carouselAnimate5, 25000);

function carouselAnimate1() {
  console.log("clicked1");
  document.getElementById("radio1").click();
}

function carouselAnimate2() {
  console.log("clicked2");
  document.getElementById("radio2").click();
}

function carouselAnimate3() {
  console.log("clicked3");
  document.getElementById("radio3").click();
}

function carouselAnimate4() {
  console.log("clicked4");
  document.getElementById("radio4").click();
}

function carouselAnimate5() {
  console.log("clicked5");
  document.getElementById("radio5").click();
}
