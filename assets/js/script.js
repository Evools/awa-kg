const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("is-active");
});

const row = document.querySelector(".platforms-row");
let isPaused = false;
let scrollAmount = 1;

function scrollSlider() {
  if (!isPaused) {
    row.scrollLeft += scrollAmount;

    if (row.scrollLeft >= row.scrollWidth / 2) {
      row.scrollLeft = 0;
    }
  }
  requestAnimationFrame(scrollSlider);
}

function duplicateItems() {
  row.innerHTML += row.innerHTML;
  row.innerHTML += row.innerHTML;
}

row.addEventListener("mouseenter", () => (isPaused = true));
row.addEventListener("mouseleave", () => (isPaused = false));

duplicateItems();
scrollSlider();

const btnUp = document.querySelector(".btn-up");
btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const middleOfPage = document.documentElement.scrollHeight / 2;

  if (scrollPosition >= middleOfPage) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
});

const currentLanguage = localStorage.getItem("language") || "ru";

const translations = {
  ru: {
    button: {
      showMore: "Показать больше",
      hideAll: "Скрыть все",
    },
  },
  kg: {
    button: {
      showMore: "Көбүрөөк көрсөтүү",
      hideAll: "Бардыгын жашыру",
    },
  },
};

const contents = document.querySelectorAll(".howtojob-content");
const btnLearnMore = document.querySelector(".learnmore");

let showAll = false;

function updateContentVisibility() {
  contents.forEach((content, index) => {
    if (showAll || index < 4) {
      content.classList.add("visible");
    } else {
      content.classList.remove("visible");
    }
  });

  btnLearnMore.textContent = showAll
    ? translations[currentLanguage].button.hideAll
    : translations[currentLanguage].button.showMore;
}

btnLearnMore.addEventListener("click", () => {
  showAll = !showAll;
  updateContentVisibility();
});

updateContentVisibility();

// Translate block

const elementsToTranslate = {
  bannerTitle: ".banner-content-title",
  bannerDescription: ".banner-content-desc",
  aboutTitle: ".about-title",
  whatIsAwa: ".about-content-title",
  awaDescription: ".about-content-desc",
  benefitsOfAwa: ".about-content-title",
  flexibleSchedule: ".about-content-desc",
  platformsToJob: ".platforms-title",
  buttonLearnMore: ".learnmoretext",
  benefitsTitle: ".benefits-title",
  careerTitle: ".career-title",
  footerTitle: ".footer-info-block h2",
  footerDesc: ".footer-info-block p",
  footerInfo: ".footer-content-text",
  goText: ".learnmore_link",
  // viewVideoCourse: ".footer-content-text",
  aboutContent: [
    {
      titleSelector: ".about-content-title",
      descSelector: ".about-content-desc",
    },
  ],
  howtojobTitleInfo: ".howtojob-content-info-title",
  howtojobContentDescInfo: ".howtojob-content-info",
};

async function setLanguage(language) {
  try {
    const response = await fetch(`./translations/${language}.json`);
    const translations = await response.json();

    for (const [key, selector] of Object.entries(elementsToTranslate)) {
      if (key !== "aboutContent") {
        const element = document.querySelector(selector);
        if (element && translations[key]) {
          element.innerHTML = translations[key];
        }
      }
    }

    if (translations.aboutContent) {
      const aboutContentItems = document.querySelectorAll(".about-content");
      aboutContentItems.forEach((item, index) => {
        const titleElement = item.querySelector(".about-content-title");
        const descElement = item.querySelector(".about-content-desc");

        if (translations.aboutContent[index]) {
          const content = translations.aboutContent[index];
          if (titleElement && content.aboutContentTitle) {
            titleElement.innerHTML = content.aboutContentTitle;
          }
          if (descElement && content.aboutContentDesc) {
            descElement.innerHTML = content.aboutContentDesc;
          }
        }
      });
    }

    function updateContent() {
      const howtojobRows = document.querySelectorAll(".howtojob-content");

      howtojobRows.forEach((row, index) => {
        if (translations.howtojobRow && translations.howtojobRow[index]) {
          const contentDesc =
            translations.howtojobRow[index]["howtojob-content-desc"];

          const descElement = row.querySelector(".howtojob-content-desc");
          if (descElement) {
            descElement.textContent = contentDesc;
          }

          const learnMoreButton = row.querySelector(".learnmore_link");
          if (learnMoreButton && translations.goText) {
            learnMoreButton.textContent = translations.goText;
          }
        }
      });
    }

    function updateBenefits() {
      const benefitsContents = document.querySelectorAll(".benefits-content");

      benefitsContents.forEach((content, index) => {
        if (translations.benefits && translations.benefits[index]) {
          const benefit = translations.benefits[index];

          const titleElement = content.querySelector(".benefits-content-title");
          const descriptionElement = content.querySelector(
            ".benefits-content-desc"
          );

          if (titleElement) {
            titleElement.textContent = benefit.title;
          }
          if (descriptionElement) {
            descriptionElement.textContent = benefit.description;
          }
        }
      });
    }

    function updateCareerRow() {
      const careerCards = document.querySelectorAll(".career-card");

      careerCards.forEach((card, index) => {
        if (translations.careerRow && translations.careerRow[index]) {
          const careerData = translations.careerRow[index];

          const titleElement = card.querySelector(".career-card-title");
          const incomeElement = card.querySelector(".career-card-income");
          const descriptionElement = card.querySelector(
            ".career-card-description-text p"
          );
          const skillsContainer = card.querySelector(
            ".career-card-skills-list"
          );
          const viewVideoCourseLink = card.querySelector(".view-video-course"); // Селектор для ссылки

          if (titleElement) {
            titleElement.textContent = careerData.title;
          }

          if (incomeElement) {
            incomeElement.textContent = careerData.income;
          }

          if (descriptionElement) {
            descriptionElement.textContent = careerData.description;
          }

          if (skillsContainer && careerData.skills) {
            skillsContainer.innerHTML = "";
            careerData.skills.forEach((skill) => {
              const listItem = document.createElement("li");
              listItem.textContent = skill;
              skillsContainer.appendChild(listItem);
            });
          }

          if (viewVideoCourseLink) {
            viewVideoCourseLink.textContent = translations.viewVideoCourse;
          }
        }
      });
    }

    function updateBannerText() {
      const bannerText = document.querySelector(".banner-text");
      if (translations.bannerText) {
        if (bannerText) {
          bannerText.setAttribute("src", translations.bannerText.src);
        }
      }
    }

    function translateElements() {
      const learnMoreLinks = document.querySelectorAll(".learnmore_link");

      learnMoreLinks.forEach((element) => {
        if (translations.learnmore_link) {
          element.textContent = translations.learnmore_link;
        }
      });
    }

    translateElements();

    updateBannerText();
    updateCareerRow();
    updateContent();
    updateBenefits();

    document.querySelectorAll(".nav__link").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations.nav && translations.nav[key]) {
        element.innerHTML = translations.nav[key];
      }
    });

    localStorage.setItem("language", language);
    updateActiveLanguageButton(language);
  } catch (error) {
    console.error("Ошибка загрузки перевода:", error);
  }
}

function updateActiveLanguageButton(language) {
  const buttons = document.querySelectorAll(".language__link");
  buttons.forEach((button) => {
    const buttonText = button.textContent.trim().toLowerCase();
    if (buttonText === language) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "ru";
  setLanguage(savedLanguage);
});
