const audio = new Audio("assets/Perfect_Christmas_Parody.mp3");
audio.preload = 'auto'

document.body.addEventListener("click", () => audio.play());
document.body.addEventListener("touchmove", () => audio.play());
document.body.addEventListener("touchstart", () => audio.play());
document.body.addEventListener("mousemove", () => audio.play());
document.body.addEventListener("mouseover", () => audio.play());