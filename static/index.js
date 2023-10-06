const convoStarter = () => {};
const emoSupport = () => {};
const moodBoost = () => {
  changeState(States.Talking);
  getJoke().then((joke) => sendMessage(joke));
  resetState();
};
const entertainment = () => {};
const feed = () => {
  alert("NOM NOMS!");
};
const help = () => {};
