const assistant = document.getElementById("assistant");
const assistantMessage = document.getElementById("assistantMessage");

const states = {
  Idle: "idle",
  Talking: "talking",
  Roaming: "roaming",
};

const changeState = (newState) => {
  assistant.className = newState;
};

const typeMessage = (char) => {
  assistantMessage.innerHTML += char;
};

const sendMessage = (message) => {
  assistantMessage.innerText = "";
  for (let i in message) {
    setTimeout(typeMessage, 100 * i, message[i]);
  }
};

const convoStarter = () => {};
const emoSupport = () => {};
const moodBoost = () => {};
const entertainment = () => {};
const feed = () => {};
const help = () => {};
