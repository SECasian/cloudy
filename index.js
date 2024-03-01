const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");
const scrollToTopBtn = document.querySelector(".scroll-to-top");

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 800) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);
displayForecastWeather(currentCity);
