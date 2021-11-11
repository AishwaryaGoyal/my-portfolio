function clickImage(source) {
  transparentDiv = document.getElementById("transparentDiv");
  transparentDiv.style.display = "block";
  bigImageDiv = document.getElementById("bigImage");

  bigImage = document.querySelector("#bigImage > img");
  bigImage.src = source;
  bigImageDiv.style.display = "block";
}

function btnCloseClicked() {
  transparentDiv = document.getElementById("transparentDiv");

  transparentDiv.style.display = "none";
  bigImageDiv = document.getElementById("bigImage");

  bigImageDiv.style.display = "none";
}
