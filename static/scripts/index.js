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
  updateMessages("user", "Come, let's talk!");
  getFact().then((fact) => sendAndUpdate(fact));
};

const emoSupport = () => {
  if (grabHandling() == false) return false;
  changeState(States.Talking, 10);
  updateMessages("user", "Got anything motivating?");
  getEmoQuote().then((quote) => sendAndUpdate(quote));
};

const moodBoost = () => {
  if (grabHandling() == false) return false;
  changeState(States.Talking, 7);
  updateMessages("user", "Tell me a joke!");
  getJoke().then((joke) => sendAndUpdate(joke));
};

const entertainment = () => {
  if (grabHandling() == false) return false;
  changeState(States.Happy, -1);
  updateMessages("user", "Let's play a game!");
  let game = Games[Math.floor(Math.random() * Games.length)];
  game();
};

const feed = () => {
  if (grabHandling() == false) return false;
  changeState(States.Happy, 3);
  sendAndUpdate("Nom noms");
};

const help = () => {
  if (grabHandling() == false) return false;
  getTask().then((task) => sendAndUpdate(task));
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

const getTime = () => {
  let d = new Date();
  let hours = d.getHours();
  let message =
    hours < 12
      ? "Good Morning 🌞"
      : hours < 16
      ? "Good afternoon 😶‍🌫️"
      : hours < 20
      ? "Good evening 😊"
      : "Good night 😴";

  sendAndUpdate(message);
};
