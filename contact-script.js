function imageClick(src) {
  window.open(src, "Full Image", "50% 50% 200px 200px location=0");
}

const email = document.getElementById("mail");
const userName = document.getElementById("name");
const msg = document.getElementById("msg");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

function submitAction() {
  if (!userName.checkValidity()) {
    userName.style.boxShadow = "0 0 5px 1px red";
  } else {
    userName.style.boxShadow = "none";
  }
  if (!email.checkValidity()) {
    email.style.boxShadow = "0 0 5px 1px red";
  } else {
    email.style.boxShadow = "none";
  }
  if (!msg.checkValidity()) {
    msg.style.boxShadow = "0 0 5px 1px red";
  } else {
    msg.style.boxShadow = "none";
  }
}
