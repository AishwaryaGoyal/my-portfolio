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
