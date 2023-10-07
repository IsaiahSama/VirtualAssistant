const convoStarter = () => {
  changeState(States.Vibing);
  getFact().then((fact) => sendMessage(fact));
};
const emoSupport = () => {
  changeState(States.Talking);

  getQuote().then((quote) => sendMessage(quote));
};
const moodBoost = () => {
  changeState(States.Talking);
  getJoke().then((joke) => sendMessage(joke));
};
const entertainment = () => {
  changeState(States.Happy);
  getTask().then((task) => sendMessage(task));
};
const feed = () => {
  changeState(States.Happy, 5);
  sendMessage("Nom noms");
};
const help = () => {
  alert("Press buttons");
};
