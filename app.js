const navCancel = document.getElementById("nav-cancel");
const navBurger = document.getElementById("nav-burger");
const nav = document.getElementById("nav");

navBurger.addEventListener("click", function () {
  navBurger.classList.toggle("is-active");
  navCancel.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});
navCancel.addEventListener("click", function () {
  navBurger.classList.toggle("is-active");
  navCancel.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});

const Cards = (() => {
  /*
   @description dom loaded event listener
   */
  window.addEventListener(
    "DOMContentLoaded",
    () => {
      setTimeout(init, 1);
    },
    true
  );

  /*
    @description initiates event listeners on all cards
   */
  function init(e) {
    if (document.querySelector(".cards")) {
      let cards = document.querySelector(".cards");
      cards.addEventListener("click", clicked, false);
      document.querySelectorAll(".cards .card")[1].click();
    }
  }

  /*
   @description this is the callback from the assigned event listener binding
   */
  function clicked(e) {
    let card = e.target;
    if (card.getAttribute("data-card")) {
      rearrange(card.getAttribute("data-card"));
    }
  }

  /*
    @description this is the callback from the assigned event listener binding
   */
  function rearrange(card) {
    let cards = document.querySelectorAll(".cards .card");
    for (let n = 0; n < cards.length; n++) {
      cards[n].classList.remove("card--left");
      cards[n].classList.remove("card--center");
      cards[n].classList.remove("card--right");
    }
    cards[card].classList.add("card--center");
    if (card == 0) {
      cards[2].classList.add("card--left");
      cards[1].classList.add("card--right");
    }
    if (card == 1) {
      cards[0].classList.add("card--left");
      cards[2].classList.add("card--right");
    }
    if (card == 2) {
      cards[1].classList.add("card--left");
      cards[0].classList.add("card--right");
    }
  }

  return {
    init,
  };
})();
