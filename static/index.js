const assistant = document.getElementById("assistant");

const states = {
  Idle: "idle",
  Talking: "talking",
  Roaming: "roaming",
};

const changeState = (newState) => {
  assistant.className = newState;
};

const convoStarter = () => {};
const emoSupport = () => {};
const moodBoost = () => {};
const entertainment = () => {};
const feed = () => {};
const help = () => {};
