let url = "https://official-joke-api.appspot.com/random_joke";

document.getElementById("newJokeBtn").addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("dad").textContent = `Dad: ${data.setup}`;
      document.getElementById("son").textContent = `Son: ${data.punchline}`;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
