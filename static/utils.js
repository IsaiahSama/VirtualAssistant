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
    setTimeout(typeMessage, 75 * i, message[i]);
  }
};

const getJoke = async () => {
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";

  const jokeRes = await fetch(url);
  let joke = await jokeRes.json();
  return joke["joke"];
};
