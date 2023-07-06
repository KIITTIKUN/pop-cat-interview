let playerScore = 0;
const image = document.getElementById('pop');
const score = document.getElementById('score');
score.innerHTML === 0
  ? (score.innerHTML = playerScore)
  : (score.innerHTML = localStorage.getItem('score'));

const getUnKnowMemePicture = () => {
  image.src = 'unknow.png';
};

const getKnowMemePicture = () => {
  image.src = 'know.png';
  score.innerHTML = ++playerScore;
  const audio = new Audio('click.wav');
  audio.play();
  localStorage.setItem('score', playerScore);
};
