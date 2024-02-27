const KEY = 3;
const buttonEncrypt = document.getElementsByClassName(
  "content__button__encrypt"
)[0];
const buttonDecrypt = document.getElementsByClassName(
  "content__button__decrypt"
)[0];
const buttonCopy = document.getElementsByClassName("content__button__copy")[0];
const textareaMessage = document.getElementsByClassName(
  "content__text__input"
)[0];
const outputTextContainer = document.getElementsByClassName(
  "content__text__output__conteiner"
)[0];

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

function decryptMessage(encryptedMessage, key) {
  let decryptedMessage = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < encryptedMessage.length; i++) {
    const char = encryptedMessage[i].toLowerCase();

    if (alphabet.includes(char)) {
      const unshiftedIndex =
        (alphabet.indexOf(char) - key + alphabet.length) % alphabet.length;
      decryptedMessage += alphabet[unshiftedIndex];
    } else {
      decryptedMessage += char;
    }
  }
  return decryptedMessage;
}

function shiftCharacter(char, shiftValue, alphabet) {
  const shiftedIndex = (alphabet.indexOf(char) + shiftValue) % alphabet.length;
  return alphabet[shiftedIndex];
}

buttonEncrypt.addEventListener("click", () => {
  const message = textareaMessage.value;
  const encryptedMessage = encryptMessage(message, KEY);
  const copyButton = document.querySelector(".content__button__copy");
  const outputMessage = outputTextContainer.querySelector(
    ".content__text__output__text__area"
  );

  outputMessage.textContent = encryptedMessage;
  outputTitle.style.display = "none";
  buttonDecrypt.disabled = false;
  copyButton.style.display = "block";
});

buttonDecrypt.addEventListener("click", () => {
  const message = outputTextContainer.querySelector(
    ".content__text__output__text__area"
  ).textContent;
  const decryptedMessage = decryptMessage(message, KEY);

  const outputMessage = outputTextContainer.querySelector(
    ".content__text__output__text__area"
  );
  outputMessage.textContent = decryptedMessage;
  buttonDecrypt.disabled = true;
});

buttonCopy.addEventListener("click", () => {
  const message = outputTextContainer.querySelector(
    ".content__text__output__text__area"
  ).textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(message).then(
      () => {
        alert("Texto copiado com sucesso.");
      }
    );
  }
});
