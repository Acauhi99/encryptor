const KEY = 3;
const buttonEncrypt = document.getElementsByClassName('content__button__encrypt')[0];
const buttonDecrypt = document.getElementsByClassName('content__button__decrypt')[0];
const textareaMessage = document.getElementsByClassName('text__input')[0];

function encryptMessage(message, key) {
  let encryptedMessage = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < message.length; i++) {
    const element = message[i].toLowerCase();
    if (alphabet.includes(element)) {
      const shiftedChar = shiftCharacter(element, key, alphabet);
      encryptedMessage += shiftedChar;
    } else {
      encryptedMessage += element;
    }
  }
  return encryptedMessage;
}

function shiftCharacter(char, shiftValue, alphabet) {
  if (!alphabet.includes(char)) {
    return char;
  }
  const shiftedIndex = (alphabet.indexOf(char) + shiftValue) % alphabet.length;
  return alphabet[shiftedIndex];
}

buttonEncrypt.addEventListener('click', () => {
  const message = textareaMessage.value;
  const encryptedMessage = encryptMessage(message, KEY);

  const outputTextContainer = document.getElementById('outputText');
  const outputMessage = outputTextContainer.querySelector('.content__text__output__p');
  outputMessage.textContent = encryptedMessage;
  outputTitle.style.display = 'none';
});