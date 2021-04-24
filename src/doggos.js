const DOG_URL = "https://dog.ceo/api/breeds/image/random";

function loadDoge() {
  let doge = document.querySelector(".doggo-pic");
  let preloadEl = document.querySelector(".preload");

  hide(preloadEl);
  loaderOn();

  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      console.log(processedResponse);
      doge.src = processedResponse.message;
      loaderOff();
    });
}

function hide(el) {
  el.classList.add("nodisplay");
}

function unhide(el) {
  el.classList.remove("nodisplay");
}

function loaderOn() {
  let loader = document.querySelector(".loader");
  let doge = document.querySelector(".doggo-pic");

  hide(doge);
  unhide(loader);
}

function loaderOff() {
  let loader = document.querySelector(".loader");
  let doge = document.querySelector(".doggo-pic");

  hide(loader);
  unhide(doge);
}

window.onload = function () {
  let button = document.querySelector(".spawn-btn");

  button.addEventListener("click", loadDoge, false);
};
