const assistant = document.getElementById("assistant");
const assistantMessage = document.getElementById("assistantMessage");

// Audios
const typingSound = document.getElementById("typingAudio");
const bgMusic = document.getElementById("bgMusic");

bgMusic.addEventListener("ended", () => {
  bgMusic.currentTime = 0;
  bgMusic.play();
});

const quotes = [];

const States = {
  Idle: "idle",
  Talking: "talking",
  Roaming: "roaming",
  Happy: "happy",
  Vibing: "vibing",
};

const playMobileAudio = () => {
  document.getElementById("mobileAudio").style.display = "none";
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

const prompts = [
  "Life is a beautiful journey.",
  "Do you believe in magic?",
  "What's your favorite book?",
  "Isn't technology amazing?",
  "The world is full of wonder.",
  "Music can heal the soul.",
  "Have you ever traveled abroad?",
  "Every day is a new adventure.",
  "Kindness goes a long way.",
  "Dreams can come true.",
  "Laughter is the best medicine.",
  "What's your favorite movie?",
  "Cherish the moments that matter.",
  "Do you have a favorite quote?",
  "Nature is so peaceful.",
  "Smile, it's contagious!",
  "Have you ever tried meditation?",
  "Art can be so inspiring.",
  "What's your favorite hobby?",
  "Love makes the world go 'round.",
  "Have you ever seen a shooting star?",
  "Be yourself, everyone else is taken.",
  "Sunsets are pure magic.",
  "Learning is a lifelong journey.",
  "What's your favorite food?",
  "The little things matter most.",
  "Dance like nobody's watching.",
  "Have you ever been to a concert?",
  "Family is everything.",
  "The universe has a plan for you.",
  "Adventure is out there!",
];

const beIdle = () => {
  if (
    assistant.className == States.Idle ||
    assistant.className == States.Roaming
  ) {
    sendMessage(prompts[Math.floor(Math.random() * prompts.length)]);
  }
};

setInterval(beIdle, 10000);
