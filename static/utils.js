const assistant = document.getElementById("assistant");
const assistantMessage = document.getElementById("assistantMessage");

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

  const jokeRes = await fetch(url);
  let joke = await jokeRes.json();
  return joke["joke"];
};
