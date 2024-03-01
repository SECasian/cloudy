const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const deva = document.querySelector(".dropdown-menu .deva");
const constanta = document.querySelector(".dropdown-menu .constanta");
const cluj = document.querySelector(".dropdown-menu .cluj");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  localStorage.setItem("city", city);
  updateCurrentCity(city);
  displayCurrentWeather(city);
  displayForecastWeather(city);
}

bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
arad.addEventListener("click", function () {
  updateWeather("Arad");
});
deva.addEventListener("click", function () {
  updateWeather("Deva");
});
constanta.addEventListener("click", function () {
  updateWeather("Constanța");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
cluj.addEventListener("click", function () {
  updateWeather("Cluj-Napoca");
});
