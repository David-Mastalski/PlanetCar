const pageBody = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const menuInput = document.querySelector("#menuBtnInput");

const navigation = document.querySelector(".cs-nav");
const navListIteam = document.querySelectorAll(".nav-list__iteam");

const toggleHandleNav = (value) => {
  if (value) {
    pageBody.style.overflow = "hidden";
    if (window.innerWidth >= 1020) {
      navigation.classList.add("full-screen-menu-active");
      navigation.style.animation = "fullScreenShowMenu .5s forwards";
    } else {
      navigation.classList.add("mobile-active");
    }
  } else {
    pageBody.style.overflow = "auto";
    menuInput.checked = false;
    if (window.innerWidth >= 1020) {
      menuInput.checked = false;
      navigation.style.animation = "fullScreenCloseMenu .5s forwards";

      setTimeout(() => {
        navigation.classList.remove("full-screen-menu-active");
        navigation.style.removeProperty("animation");
      }, 500);
    } else {
      navigation.classList.remove("mobile-active");
    }
  }
};

menuBtn.addEventListener("click", () => {
  const state = menuInput.checked;
  toggleHandleNav(state);
});
navListIteam.forEach((iteam) => {
  iteam.addEventListener("click", () => toggleHandleNav(false));
});

const lazyFirstRowImg = document.querySelectorAll(".lazy-loading-img");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const lazyImageObserver = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var lazyImage = entry.target;
      lazyImage.src = lazyImage.getAttribute("data-src");
      lazyImage.removeAttribute("data-src");
      lazyImageObserver.unobserve(lazyImage);
    }
  });
},
options);

lazyFirstRowImg.forEach(function (lazyImage) {
  lazyImageObserver.observe(lazyImage);
});

const moreBtn = document.querySelector(".more-btn");
const moreOffersContainerElement = document.querySelector(".more-offers");

const showMore = () => {
  moreBtn.textContent = "Zwiń";
  moreOffersContainerElement.classList.add("show-more-offers");
};

const showLess = () => {
  moreBtn.textContent = "Więcej";
  moreOffersContainerElement.classList.remove("show-more-offers");
};

moreBtn.addEventListener("click", () => {
  !moreOffersContainerElement.classList.contains("show-more-offers")
    ? showMore()
    : showLess();
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 1200) {
    showLess();
  }
});

const ageContainer = document.querySelector(".age-container");
const transactionContainer = document.querySelector(".transaction-container");
const clientContainer = document.querySelector(".client-container");
const skillsContainer = document.querySelector(".skills-container");
const footerCurrentYears = document.querySelectorAll(".footer__currentYear");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const elapsedTime = currentYear - 2010;

let start = 0;
let speed = 2000;

const skillsOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const age = {
  startValue: start,
  endValue: elapsedTime,
  frontAddition: "",
  backAddition: "",
};

const transaction = {
  startValue: start,
  endValue: 100,
  frontAddition: "+",
  backAddition: "0",
};

const client = {
  startValue: start,
  endValue: 100,
  frontAddition: "",
  backAddition: "%",
};

const setValue = (
  startValue,
  endValue,
  frontAddition,
  backAddition,
  container
) => {
  const progress = setInterval(() => {
    startValue++;
    if (startValue === endValue) {
      clearInterval(progress);
    }
    container.innerText = `${frontAddition}${startValue}${backAddition}`;
  }, speed / endValue);
};

const lazyskillsObserver = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      setValue(
        age.startValue,
        age.endValue,
        age.frontAddition,
        age.backAddition,
        ageContainer
      );
      setValue(
        transaction.startValue,
        transaction.endValue,
        transaction.frontAddition,
        transaction.backAddition,
        transactionContainer
      );
      setValue(
        client.startValue,
        client.endValue,
        client.frontAddition,
        client.backAddition,
        clientContainer
      );
      lazyskillsObserver.unobserve(skillsContainer);
    }
  });
},
skillsOptions);

lazyskillsObserver.observe(skillsContainer);
footerCurrentYears.forEach((footerCurrentYear) => {
  footerCurrentYear.innerText = currentYear;
});
