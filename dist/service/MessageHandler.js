var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MessageCipher } from "./MessageCipher.js";
export class MessageHandler {
    constructor(textInput, textOutput, encryptButton, decryptButton, copyButton, outputTitle) {
        this.textInput = textInput;
        this.textOutput = textOutput;
        this.encryptButton = encryptButton;
        this.decryptButton = decryptButton;
        this.copyButton = copyButton;
        this.outputTitle = outputTitle;
        this.KEY = 3;
        this.initializeEventListeners();
    }
    initializeEventListeners() {
        this.encryptButton.addEventListener("click", this.handleEncrypt.bind(this));
        this.decryptButton.addEventListener("click", this.handleDecrypt.bind(this));
        this.copyButton.addEventListener("click", this.handleCopy.bind(this));
    }
    handleEncrypt(e) {
        e.preventDefault();
        const message = this.textInput.value;
        const encryptedMessage = MessageCipher.encrypt({ message, key: this.KEY });
        this.textOutput.textContent = encryptedMessage;
        this.outputTitle.style.display = "none";
        this.decryptButton.disabled = false;
        this.copyButton.style.display = "block";
    }
    handleDecrypt(e) {
        e.preventDefault();
        const message = this.textOutput.textContent || "";
        const decryptedMessage = MessageCipher.decrypt({ message, key: this.KEY });
        this.textOutput.textContent = decryptedMessage;
        this.decryptButton.disabled = true;
    }
    handleCopy(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const message = this.textOutput.textContent || "";
            try {
                yield navigator.clipboard.writeText(message);
                alert("Texto copiado com sucesso.");
            }
            catch (err) {
                console.error("Failed to copy text:", err);
            }
        });
    }
}
