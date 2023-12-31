const inputField = document.getElementById("userInput");

const handleInput = (e) => {
  if (e.keyCode === 13) {
    updateMessages("user", inputField.value);
    inputField.value = "";
  }
};

const updateMessages = (sender, content) => {
  let newMessage = document.createElement("div");
  newMessage.className = sender + "Message message";
  newMessage.innerHTML = content;

  chatWindow.appendChild(newMessage);
};
