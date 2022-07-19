const getUnKnowMemePicture = () => {
  image.src = 'unknow.png';
};

const getKnowMemePicture = () => {
  image.src = 'know.png';
  playerScore++;
  let audio = new Audio('click.wav');
  audio.play();
};

let playerScore = 0;
const image = document.getElementById('pop');
const score = document.getElementById('score');
score.innerHTML = playerScore;

setInterval(() => {
  score.innerHTML = playerScore;
}, 0);
