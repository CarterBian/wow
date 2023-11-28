const wrapper = document.querySelector(".wrapper");
const greeting = document.querySelector(".greeting");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const spotifyPlayer = document.getElementById("spotify-player");

noBtn.addEventListener("click", () => {
  greeting.innerHTML = "";
  question.innerHTML = "Aw Nancy you're no fun ;(";
  gif.src =
    "https://media.giphy.com/media/XdD5od5914CxSq3q69/giphy.gif";
  spotifyPlayer.src = "https://open.spotify.com/embed/track/66HNv8qd9jr7q5P9nNTOOZ";
});

yesBtn.addEventListener("mouseover", () => {
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const maxX = window.innerWidth - yesBtnRect.width;
  const maxY = window.innerHeight - yesBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});

window.carterIsSoCool = function() {
  greeting.innerHTML = "Happy early Easter!";
  question.innerHTML = "Yay, see you on Friday!";
  gif.src = "https://media.giphy.com/media/3o6Ei00MRU2WnGpcGI/giphy.gif";
  spotifyPlayer.src = "https://open.spotify.com/embed/track/7gXXJ5dDfswRXGg19q3N6h";
};

yesBtn.addEventListener("click", window.carterIsSoCool)
yesBtn.addEventListener("click", () => {
  greeting.innerHTML = "";
  question.innerHTML = "Yay, see you on Friday!";
  gif.src =
    "https://media.giphy.com/media/3o6Ei00MRU2WnGpcGI/giphy.gif";
  spotifyPlayer.src = "https://open.spotify.com/embed/track/7gXXJ5dDfswRXGg19q3N6h";
});