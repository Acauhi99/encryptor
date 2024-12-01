import { CipherOptions } from "../types";

export class MessageCipher {
  private static readonly alphabet: string = "abcdefghijklmnopqrstuvwxyz";

  static encrypt({ message, key }: Omit<CipherOptions, "alphabet">): string {
    let encryptedMessage: string = "";

    for (let i = 0; i < message.length; i++) {
      const element: string = message[i].toLowerCase();

      if (this.alphabet.includes(element)) {
        const shiftedChar: string = this.shiftCharacter(element, key);
        encryptedMessage += shiftedChar;
      } else {
        encryptedMessage += element;
      }
    }

    return encryptedMessage;
  }

  static decrypt({ message, key }: Omit<CipherOptions, "alphabet">): string {
    let decryptedMessage: string = "";

    for (let i = 0; i < message.length; i++) {
      const char: string = message[i].toLowerCase();

      if (this.alphabet.includes(char)) {
        const unshiftedIndex: number =
          (this.alphabet.indexOf(char) - key + this.alphabet.length) %
          this.alphabet.length;
        decryptedMessage += this.alphabet[unshiftedIndex];
      } else {
        decryptedMessage += char;
      }
    }

    return decryptedMessage;
  }

  private static shiftCharacter(char: string, shiftValue: number): string {
    const shiftedIndex: number =
      (this.alphabet.indexOf(char) + shiftValue) % this.alphabet.length;
    return this.alphabet[shiftedIndex];
  }
}
