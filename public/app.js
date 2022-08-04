// ====== Hamburger Menu ======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// ====== Tab Navigation on Pet Profile Page ======
const openTab = (e, name) => {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "flex";
  document.getElementById(name).style.flexWrap = "wrap";
  e.currentTarget.className += " active";
};

// ====== Generating Pets on Pets Dashboard ======
const mypetsContainer = document.querySelector(".mypets-grid");

if (mypetsContainer && mypetsContainer.children) {
  mypetsContainer.lastElementChild;
  for (let pet of mypetsContainer.children) {
    if (pet !== mypetsContainer.lastElementChild) {
      pet.addEventListener("click", () => {
        window.location.href = "/petprofile/" + pet.dataset.petId;
      });
    } else {
      pet.addEventListener("click", () => {
        window.location.href = "/addpets.html";
      });
    }
  }
}

// ====== Pet Profile Page ======
const add_event = document.getElementById("add_event");

if (add_event) {
  add_event.addEventListener("click", () => {
    window.location.href = "/eventchoice.html";
  });
}
