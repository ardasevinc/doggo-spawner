const DOG_URL = "https://dog.ceo/api/breeds/image/random";

window.onload = function () {
  let doggos = document.querySelector(".doggo");
  let button = document.querySelector(".spawn-btn");

  function loadDoge() {
    const promise = fetch(DOG_URL);
    promise
      .then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
      })
      .then(function (processedResponse) {
        console.log(processedResponse);

        // const img = document.createElement("img");
        // img.src = processedResponse.message;
        // img.alt = "Cute doggo";
        // doggos.append;
        doggos.src = processedResponse.message;
      });
  }

  button.addEventListener("click", loadDoge, false);
};
