const inputField = document.getElementById("userInput");

const handleInput = (e) => {
  if (e.keyCode === 13) {
    updateMessages("user", inputField.value);
    inputField.value = " ";
  }
};
