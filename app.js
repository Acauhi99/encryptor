const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const SHIFT = 3;
const ENCRYPTED_ALPHABET = ALPHABET.slice(SHIFT) + ALPHABET.slice(0, SHIFT);

const buttonEncrypt = document.getElementsByClassName('content__button__encrypt')[0];
const buttonDecrypt = document.getElementsByClassName('content__button__decrypt');
const textareaMessage = document.getElementsByClassName('text__input')[0];


function encryptMessage(message) {
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    const charIndex = ALPHABET.indexOf(message[i]);
    if (charIndex !== -1) {
      encryptedMessage += ENCRYPTED_ALPHABET[charIndex];
    } else {
      encryptedMessage += message[i];
    }
  }
  return encryptedMessage;
}

buttonEncrypt.addEventListener('click', () => {
  const message = textareaMessage.value;
  const encryptedMessage = encryptMessage(message);

  const outputTextContainer = document.getElementById('outputText');
  const outputMessage = outputTextContainer.querySelector('.content__text__output__p');
  outputMessage.textContent = encryptedMessage;
  outputTitle.style.display = 'none';
});