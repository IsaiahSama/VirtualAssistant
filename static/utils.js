const assistant = document.getElementById("assistant");
const assistantMessage = document.getElementById("assistantMessage");

// Audios
const typingSound = document.getElementById("typingAudio");
const bgMusic = document.getElementById("bgMusic");

bgMusic.addEventListener(
  "ended",
  () => {
    this.currentTime = 0;
    this.play();
  },
  false
);

const quotes = [];

const States = {
  Idle: "idle",
  Talking: "talking",
  Roaming: "roaming",
  Happy: "happy",
  Vibing: "vibing",
};

const prepMusic = () => {
  alert("WAKE UP!");
  bgMusic.play();
};

const toggleMusic = (current, other) => {
  document.getElementById(current).classList.add("hidden");
  document.getElementById(other).classList.remove("hidden");

  bgMusic.muted = current == "muteMusic";
};

const changeState = (newState, secs = 10) => {
  assistant.className = newState;
  resetState(secs);
};

const resetState = (secs) => {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 2);
    assistant.className = num == 0 ? States.Idle : States.Roaming;
  }, 1000 * secs);
};

const typeMessage = (char) => {
  assistantMessage.innerHTML += char;
};

const sendMessage = (message) => {
  assistantMessage.innerText = "";
  typingSound.play();
  for (let i in message) {
    setTimeout(typeMessage, 45 * i, message[i]);
  }

  setTimeout(() => {
    typingSound.pause();
    typingSound.currentTime = 0;
  }, 44 * message.length);
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

const getTask = async () => {
  const url =
    "http://www.boredapi.com/api/activity?participants=1&type=education";

  const response = await fetch(url);
  const json = await response.json();

  return json["activity"];
};

const getFact = async () => {
  const url = "https://api.api-ninjas.com/v1/facts?limit=1";

  const response = await fetch(url, {
    headers: { "X-Api-Key": "2rtV16X47lcfi0ovjOJ17A==AI7fWq68POvmncCe" },
  });
  const json = await response.json();

  return json[0]["fact"];
};
