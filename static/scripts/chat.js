const inputField = document.getElementById("userInput");

const utterances = [
  [/how.*you.*/],
  [
    /hi.*/,
    /hey.*/,
    /hello.*/,
    /good (morning|day|night|evening|afternoon).*/,
    /Hiya.*/,
    /Hola.*/,
    /Greetings.*/,
  ],
  [/what (is|are).+/],
  [/(i am|i'm).+/],
  [/yes.*/],
  ["boop"],
];
const responses = [
  [
    "I'm fine, thanks for asking. And yourself? 😊",
    "I'm not sure, but maybe I'll find out later 🤔",
    "How kind of you to ask! I'm doing great. 😊",
    "Feeling good, and ready for a chat! How about you? 😄",
    "I appreciate your concern! I'm feeling wonderful. 🌟",
    "Thanks for checking in! I'm doing fantastic. 🚀",
    "I'm good, and I'm here to chat with you. How about your day? 😊",
    "Your thoughtfulness warms my virtual heart! I'm doing well. ❤️",
    "I'm feeling positive today, and talking to you makes it even better! 😊",
    "Thanks for asking! I'm in a good mood. How about yourself? 😄",
    "I'm doing great! Ready to chat and share some positive vibes. 😊",
  ],
  [
    "Why, good day to you too! 😎",
    "Hey there!",
    "Herro!",
    "Well you seem cherry, hey!",
    "Greetings! How can I brighten your day? ☀️",
    "Hello! Ready for some delightful conversation? 🌈",
    "Hiya! What's the buzz in your world? 🐝",
    "Well, hello! What brings you here today? 🌼",
    "Hey! Feeling fabulous, I hope? 💃",
    "Hola! How's your day going so far? 🌞",
    "Greetings, friend! What's on your mind? 🤔",
  ],
  [
    "Did you try googling it?",
    "So there's this thing called a search engine...",
    "Nothing much, what about you?",
    "Let's keep the mystery alive! Try searching, and let me know what you find!",
    "I'm not to sure myself, when you find out let me know!",
    "No you!",
    "Just chatting with one of my favorite people.",
    "Okay, so they are really cool, objects that you can, use for specified tasks! Yay, I'm helpful!",
  ],
  [
    "I am intrigued! Tell me more about yourself. 😊",
    "Interesting! I'd love to hear more about who you are. 🌟",
    "I am all ears! Share more about yourself. 👂",
    "Fascinating! What else can you tell me about you? 🤔",
    "I am genuinely curious! Share your story with me. 📖",
    "You are an interesting person! What aspects of yourself would you like to talk about? 🌈",
    "I am here for you! Feel free to share more about yourself. 🤗",
    "That's cool! I am here to chat, so tell me more. 😊",
    "I am ready to listen! What else can you tell me about you? 🎧",
    "Nice to meet you! I am here for any topic you'd like to discuss. 👋",
    "I am excited to know more about the amazing person behind the screen! 🚀",
    "Well, that's cool and all, but did you know I am watching you? 👁️👁️",
  ],
  [
    "I like your enthusiasm 🫡",
    "Yes! 😊",
    "Absolutely! 🌟",
    "You got it! 👍",
    "Affirmative! 🚀",
    "Indeed! 😎",
    "Sure thing! 🌈",
    "Absolutely positively yes! 🌟",
    "Without a doubt! 💯",
    "Yup! 😄",
    "Of course! 🌼",
    "Yep! 🎉",
    "Certainly! 🤗",
  ],
  ["beep"],
];
const extra = [
  "Go on, I'm listening~ 👂",
  "Well, that's potentially interesting 🤔",
  "Seems a bit complicated, unclear even! Want to simplify it for me? 🧐",
  "You're cool! 😎",
  "Not fully sure what that is, but I like your enthusiasm! 🌟",
  "Talking with you is nice... 😊",
  "You always have the most fascinating things to share! 🌈",
  "Your perspective is so refreshing! 🍃",
  "I love how your mind works! 🧠",
  "I appreciate your positive energy! 🌞",
  "It's like you have a superpower for making things more exciting! 💥",
  "Your thoughts are like a breath of fresh air! 🌬️",
  "I'm lucky to chat with someone as awesome as you! 🍀",
  "You bring so much joy to our conversations! 😄",
  "I'm grateful to have you as a friend! 🤗",
  "Your ideas are like little rays of sunshine! ☀️",
  "You have a way of making everything more interesting! 🌐",
  "I enjoy our talks so much! Thanks for being awesome! 🚀",
  "Oh look! Buttons on the side, I wonder what they do! 👀",
];

const lisaResponse = (text) => {
  text = text.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  matches = [];

  for (let i = 0; i < utterances.length; i++) {
    for (let expr of utterances[i]) {
      if (text.match(expr) != null) {
        matches.push(
          responses[i][Math.floor(Math.random() * responses[i].length)]
        );
        break;
      }
    }
  }

  extraResponse = Math.floor(Math.random() * 100);
  if (matches.length > 0)
    updateMessages("lisa", matches[Math.floor(Math.random() * matches.length)]);
  if (extraResponse > 70 || matches.length == 0) {
    updateMessages("lisa", extra[Math.floor(Math.random() * extra.length)]);
  }
  console.log(matches);
};

const handleInput = (e) => {
  if (e.keyCode === 13) {
    let input = inputField.value;
    updateMessages("user", input);
    setTimeout(() => {
      lisaResponse(input);
    }, 1000);
    inputField.value = "";
    inputField.disabled = true;
    setTimeout(() => {
      inputField.disabled = false;
    }, 3000);
  }
};

const updateMessages = (sender, content) => {
  let newMessage = document.createElement("div");

  newMessage.className = sender + "Message message";
  newMessage.innerHTML = content;

  setTimeout(() => chatWindow.appendChild(newMessage), 500);
};
