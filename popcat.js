const getUnKnowMemePicture = () => {
  document.getElementById('pop').src = 'unknow.png';
  playerScore++;
};

const getKnowMemePicture = () => {
  document.getElementById('pop').src = 'know.png';
  audio.play();
};

let playerScore = 0;
const audio = document.getElementById('audio');
const score = document.getElementById('score');
score.innerHTML = playerScore;

setInterval(() => {
  score.innerHTML = playerScore;
}, 0);
