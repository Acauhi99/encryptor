const KEY = 3;

const buttonEncrypt = document.querySelectorAll('button')[0];
const buttonDecrypt = document.querySelectorAll('button')[1];
const buttonCopy = document.querySelectorAll('button')[2];

const textInput = document.querySelectorAll('textarea')[0];
const textOutput = document.querySelectorAll('textarea')[1];

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

buttonEncrypt.addEventListener("click", (e) => {
  e.preventDefault();
  const message = textInput.value;
  const encryptedMessage = encryptMessage(message, KEY);

  textOutput.textContent = encryptedMessage;
  outputTitle.style.display = "none";
  buttonDecrypt.disabled = false;
  buttonCopy.style.display = "block";
});

buttonDecrypt.addEventListener("click", (e) => {
  e.preventDefault();
  const message = textOutput.textContent;
  const decryptedMessage = decryptMessage(message, KEY);

  textOutput.textContent = decryptedMessage;
  buttonDecrypt.disabled = true;
});

buttonCopy.addEventListener("click", (e) => {
  e.preventDefault();
  const message = textOutput.textContent;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(message)
    .then(() => {
        alert("Texto copiado com sucesso.");
      }
    );
  }
});
