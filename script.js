const audio = new Audio("assets/Perfect_Christmas_Parody.mp3");
//audio.preload = "auto";

window.onload = async () => {
  const response = await fetch(
    `https://rest-api-codebuddy2.onrender.com/api/views?url=${window.hostname}`
  );
  const data = await response.json();
  if (data?.error) {
    return (document.querySelector(".views").innerHTML = `Views: error`);
  }
  document.querySelector(".views").innerHTML = `Views: ${data.views}`;
};

document.getElementById("okay").addEventListener("click", () => {
  audio.play();
  document.querySelector(".greetings").style.display = "none";
});
document.body.addEventListener("click", () => audio.play());
document.body.addEventListener("touchmove", () => audio.play());
document.body.addEventListener("touchstart", () => audio.play());
document.body.addEventListener("mousemove", () => audio.play());
document.body.addEventListener("mouseover", () => audio.play());
