var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var firstname = popup.querySelector("[name=firstname]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var textarea = popup.querySelector("textarea");
var namestorage = localStorage.getItem("firstname");
var emailstorage = localStorage.getItem("email");
var overlay = document.querySelector(".modal-overlay")

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");

  firstname.value = namestorage;
  email.value = emailstorage;
  if (namestorage && emailstorage) {
    textarea.focus();
  } else if (namestorage) {
    email.focus();
  } else {
    firstname.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});


form.addEventListener("submit", function() {
  if (!firstname.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("email", email.value)
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});
