export class MessageCipher {
    static encrypt({ message, key }) {
        let encryptedMessage = "";
        for (let i = 0; i < message.length; i++) {
            const element = message[i].toLowerCase();
            if (this.alphabet.includes(element)) {
                const shiftedChar = this.shiftCharacter(element, key);
                encryptedMessage += shiftedChar;
            }
            else {
                encryptedMessage += element;
            }
        }
        return encryptedMessage;
    }
    static decrypt({ message, key }) {
        let decryptedMessage = "";
        for (let i = 0; i < message.length; i++) {
            const char = message[i].toLowerCase();
            if (this.alphabet.includes(char)) {
                const unshiftedIndex = (this.alphabet.indexOf(char) - key + this.alphabet.length) %
                    this.alphabet.length;
                decryptedMessage += this.alphabet[unshiftedIndex];
            }
            else {
                decryptedMessage += char;
            }
        }
        return decryptedMessage;
    }
    static shiftCharacter(char, shiftValue) {
        const shiftedIndex = (this.alphabet.indexOf(char) + shiftValue) % this.alphabet.length;
        return this.alphabet[shiftedIndex];
    }
}
MessageCipher.alphabet = "abcdefghijklmnopqrstuvwxyz";
