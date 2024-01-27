//.hero-2-section--effect
// const header = document.querySelector("header");
//
// window.addEventListener("scroll", function (e) {
//   let Top = heroSection.getBoundingClientRect().top;
//   if (Top < 0) {
//     console.log("yess");
//     header.classList.add("hero-2-section--effect");
//   } else header.classList.remove("hero-2-section--effect");
// });
// const cards = document.querySelectorAll(".membership-card");
// const obsOptions = {
//   root: null,
//   threshold: 0.4,
// };
// const flipFlop = function (entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(entry.target);
//       entry.target.classList.add("flip--effect");
//     } else entry.target.classList.remove("flip--effect");
//   });
// };
// const observer = new IntersectionObserver(flipFlop, obsOptions);
// cards.forEach((card) => {
//   observer.observe(card);
// });

// const val = 15;
// if (val > 10) console.log("yes");
// else if (val > 13) console.log("dyes...");
const hero2Section = document.querySelector(".hero-2-section");

const featureSection = document.querySelector(".feature-section");
const obsCall = function (entries, observer) {
  const [entry] = entries;
  const Top = hero2Section.getBoundingClientRect().top;
  // console.log(Top);
  // console.log(hero2Section.getBoundingClientRect());
  if (entry.isIntersecting) {
    const Bottom = hero2Section.getBoundingClientRect().bottom;
    const Height = hero2Section.getBoundingClientRect().height;
    setTimeout(function () {
      // console.log(Height, Bottom);

      hero2Section.classList.add("hero-2-section--effect");
      hero2Section.style.top = `${Top - 100}px`;
    }, 100);
  } else hero2Section.classList.remove("hero-2-section--effect");
};
const observer = new IntersectionObserver(obsCall, {
  root: null,
  threshold: 0.05,
});

observer.observe(featureSection);

//cards....
const flipFlop = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting && entry.intersectionRatio > 0) {
      entry.target.style.transform = "rotateX(0)";
    } else return;
  });
};
const cardObj = {
  root: null,
  threshold: [0.2],
};
const cards = document.querySelectorAll(".membership-card");
const observerCards = new IntersectionObserver(flipFlop, cardObj);

cards.forEach((card) => {
  observerCards.observe(card);
});
//menu...
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
menu.addEventListener("click", function () {
  console.log("clicked...");
  const sidebar = document.querySelector(".sidebar");
  body.classList.add("body--effect");
  console.log(sidebar);
  sidebar.classList.add("sidebar--effect");
});
const cmenu = document.querySelector(".cross-menu");
//.cross-menu
cmenu.addEventListener("click", function () {
  console.log("clicked...");
  const sidebar = document.querySelector(".sidebar");
  body.classList.remove("body--effect");

  console.log(sidebar);
  sidebar.classList.remove("sidebar--effect");
});
cmenu.addEventListener("mouseover", function () {
  console.log("hover...");
  const lists = document.querySelectorAll(".br");
  lists.forEach((list) => {
    this.classList.add("br--effect");
  });
});
//membership-cards in view..
const memBtns = document.querySelectorAll(".membBtn");
memBtns.forEach((memBtn) => {
  memBtn.addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("sidebar--effect")) {
      body.classList.remove("body--effect");

      sidebar.classList.remove("sidebar--effect");
    }

    document.querySelector(".membership-grid").scrollIntoView({
      behavior: "smooth",
    });
  });
});

//video....

const videoEl = document.querySelector("video");

//
// function isScrolledIntoView(el) {
//   var elemTop = el.getBoundingClientRect().top;
//   var elemBottom = el.getBoundingClientRect().bottom;

//   var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
//   return isVisible;
// }
const videoObj = {
  root: null,
  threshold: 0.4,
};
const videoCall = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.play();
  } else {
    entry.target.pause();
  }
};
const videoObserver = new IntersectionObserver(videoCall, videoObj);
videoObserver.observe(videoEl);
