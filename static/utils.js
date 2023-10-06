const assistant = document.getElementById("assistant");
const assistantMessage = document.getElementById("assistantMessage");

const quotes = [];

const States = {
  Idle: "idle",
  Talking: "talking",
  Roaming: "roaming",
  Happy: "happy",
};

const changeState = (newState, secs = 10) => {
  assistant.className = newState;
  resetState(secs);
};

const resetState = (secs) => {
  setTimeout(() => {
    changeState(States.Idle);
  }, 1000 * secs);
};

const typeMessage = (char) => {
  assistantMessage.innerHTML += char;
};

const sendMessage = (message) => {
  assistantMessage.innerText = "";
  for (let i in message) {
    setTimeout(typeMessage, 75 * i, message[i]);
  }
};

const getJoke = async () => {
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";

  const response = await fetch(url);
  let joke = await response.json();
  return joke["joke"];
};

const getQuote = async () => {
  if (quotes.length == 0) {
    const url = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

    const response = await fetch(url);
    const json = await response.json();

    for (let obj of json) quotes.push(obj["text"]);
  }

  let num = Math.floor(Math.random() * quotes.length);
  return quotes[num];
};
