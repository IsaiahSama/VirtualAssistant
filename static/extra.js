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

const catchMe = () => {
  const clickGame = (ev) => {
    sendMessage("Aww, you caught me...");
    changeState(States.Excited, 3);
    assistant.removeEventListener("click", clickGame);
  };

  sendMessage("Catch me if you can!");

  setTimeout(() => {
    changeState("running", -1);
    // assistant.className = "running";
    assistant.addEventListener("click", clickGame);
  }, 2000);
};

const Games = [catchMe];
