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

const ballResp = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

const catchMe = () => {
  const clickGame = (ev) => {
    sendMessage("Aww, you caught me...");
    changeState(States.Excited, 3);
    assistant.removeEventListener("click", clickGame);
  };

  sendMessage("Catch me if you can!");

  setTimeout(() => {
    changeState(States.Running, -1);
    assistant.addEventListener("click", clickGame);
  }, 2000);
};

const numberGuesser = () => {
  setTimeout(() => {
    let randomNumber = Math.ceil(Math.random() * 5);
    let resp = parseInt(prompt("Well? What do you think?"), 10);
    if (randomNumber == resp) {
      changeState(States.Happy, 5);
      sendMessage("Yes! You got it!");
    } else {
      changeState(States.No, 3);
      sendMessage("Bzzt. You got it wrong!");
    }
  }, 3000);

  sendMessage("I'm Thinking of a number between 1 and 5. Guess!");
};

const eightBall = () => {
  setTimeout(() => {
    let q = prompt("Ask me a question!");
    if (q == "") {
      changeState(States.No, 2);
      sendMessage("You didn't even tell me anything...");
    } else {
      let response = ballResp[Math.floor(Math.random() * ballResp.length)];
      changeState(States.Excited, 5);
      sendMessage(response);
    }
  }, 2500);

  sendMessage("Oh oh! Let's play a game! Ask me a question!");
};

const Games = [catchMe, numberGuesser, eightBall];
