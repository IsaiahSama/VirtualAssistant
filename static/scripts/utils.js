const assistant = document.getElementById("assistant");
const assistantMessage = document.getElementById("assistantMessage");

let isTyping = false;

// Audios
const typingSound = document.getElementById("typingAudio");
const bgMusic = document.getElementById("bgMusic");

bgMusic.addEventListener("ended", () => {
  bgMusic.currentTime = 0;
  bgMusic.play();
});

const quotes = [];
const quoteCategories = [
  "happiness",
  "success",
  "love",
  "inspirational",
  "future",
];

const States = {
  Idle: "idle",
  Talking: "talking",
  Roaming: "roaming",
  Happy: "happy",
  Excited: "excited",
  Vibing: "vibing",
  Running: "running",
  No: "no",
};

const playMobileAudio = () => {
  document.getElementById("mobileAudio").style.display = "none";
  bgMusic.play();
};

playTyping = true;

const toggleMusic = (current, other) => {
  document.getElementById(current).classList.add("hidden");
  document.getElementById(other).classList.remove("hidden");

  bgMusic.muted = current == "muteMusic";
  playTyping = current == "muteMusic";
};

const changeState = (newState, secs = 10) => {
  assistant.className = newState;
  if (secs > 0) resetState(secs);
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
  if (isTyping == true) {
    return false;
  }
  isTyping = true;
  assistantMessage.innerText = "";
  if (playTyping) typingSound.play();
  for (let i in message) {
    setTimeout(typeMessage, 45 * i, message[i]);
  }

  setTimeout(() => {
    if (playTyping) {
      typingSound.pause();
      typingSound.currentTime = 0;
    }
    isTyping = false;
  }, 44 * message.length);
};

const sendAndUpdate = (message) => {
  sendMessage(message);
  updateMessages("lisa", message);
};

const getJoke = async () => {
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";

  const response = await fetch(url);
  let joke = await response.json();
  return joke["joke"];
};

const getEmoQuote = async () => {
  let category =
    quoteCategories[Math.floor(Math.random() * quoteCategories.length)];
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  const response = await fetch(url, {
    headers: { "X-Api-Key": "2rtV16X47lcfi0ovjOJ17A==AI7fWq68POvmncCe" },
  });

  const json = await response.json();

  return json[0]["quote"];
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

const chatWindow = document.getElementById("chatWindow");
