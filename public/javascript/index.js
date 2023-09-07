//Audio
const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.add('playing');
  } else {
    audio.pause();
    playButton.classList.remove('playing');
  }
});

audio.addEventListener('ended', () => {
  playButton.classList.remove('playing');
});


//Sepuh
const warning = document.getElementById('alert');
const backgroundColorful = document.getElementById('secret');
const sepuhPatrix = document.getElementById('sepuh');
const audioSepuh = document.getElementById('audio-container');
const footerInv = document.getElementById('invisible');

warning.addEventListener('click', ()=> {
    backgroundColorful.setAttribute("class", "secret");
    sepuhPatrix.style.display = "block";
    audioSepuh.style.display = "block";
    footerInv.setAttribute("class", "invisible");
    warning.style.display = "none";
    setTimeout(function() {(
        backgroundColorful.setAttribute("class", " "),
        sepuhPatrix.style.display = "none",
        audioSepuh.style.display = "none",
        footerInv.setAttribute("class", " ")
    )}, 21000);
})



