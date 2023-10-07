let handling = false;

const grabHandling = () => {
  if (handling == true) return false;
  handling = true;
  setTimeout(() => {
    handling = false;
  }, 5000);
  return true;
};

const convoStarter = () => {
  if (grabHandling() == false) return false;
  changeState(States.Vibing);
  getFact().then((fact) => sendMessage(fact));
};

const emoSupport = () => {
  if (grabHandling() == false) return false;
  changeState(States.Talking);

  getQuote().then((quote) => sendMessage(quote));
};

const moodBoost = () => {
  if (grabHandling() == false) return false;
  changeState(States.Talking);
  getJoke().then((joke) => sendMessage(joke));
};

const entertainment = () => {
  if (grabHandling() == false) return false;
  changeState(States.Happy);
  getTask().then((task) => sendMessage(task));
};

const feed = () => {
  if (grabHandling() == false) return false;
  changeState(States.Happy, 5);
  sendMessage("Nom noms");
};

const help = () => {
  if (grabHandling() == false) return false;
  sendMessage("Press buttons");
};
