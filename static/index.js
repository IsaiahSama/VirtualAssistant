const convoStarter = () => {};
const emoSupport = () => {};
const moodBoost = () => {
  changeState(States.Talking);
  getJoke().then((joke) => sendMessage(joke));
};
const entertainment = () => {};
const feed = () => {
  alert("NOM NOMS!");
  changeState(States.Happy, 5);
};
const help = () => {};
