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
  changeState(States.Vibing, 8);
  getFact().then((fact) => sendMessage(fact));
};

const emoSupport = () => {
  if (grabHandling() == false) return false;
  changeState(States.Talking, 10);

  getEmoQuote().then((quote) => sendMessage(quote));
};

const moodBoost = () => {
  if (grabHandling() == false) return false;
  changeState(States.Talking, 7);
  getJoke().then((joke) => sendMessage(joke));
};

const entertainment = () => {
  if (grabHandling() == false) return false;
  changeState(States.Happy, -1);
  let game = Games[Math.floor(Math.random() * Games.length)];
  game();
};

const feed = () => {
  if (grabHandling() == false) return false;
  changeState(States.Happy, 3);
  sendMessage("Nom noms");
};

const help = () => {
  if (grabHandling() == false) return false;
  getTask().then((task) => sendMessage(task));
};

const beIdle = () => {
  if (
    assistant.className == States.Idle ||
    assistant.className == States.Roaming
  ) {
    sendMessage(prompts[Math.floor(Math.random() * prompts.length)]);
  }
};

setInterval(beIdle, 10000);
