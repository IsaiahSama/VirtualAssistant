const convoStarter = () => {
  getFact().then((fact) => sendMessage(fact));
};
const emoSupport = () => {
  getQuote().then((quote) => sendMessage(quote));
};
const moodBoost = () => {
  changeState(States.Talking);
  getJoke().then((joke) => sendMessage(joke));
};
const entertainment = () => {
  changeState(States.Talking);
  getTask().then((task) => sendMessage(task));
};
const feed = () => {
  alert("NOM NOMS!");
  changeState(States.Happy, 5);
};
const help = () => {
  alert("Press buttons");
};
