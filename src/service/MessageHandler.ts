import { MessageCipher } from "./MessageCipher.js";

export class MessageHandler {
  private readonly KEY: number = 3;

  constructor(
    private textInput: HTMLTextAreaElement,
    private textOutput: HTMLTextAreaElement,
    private encryptButton: HTMLButtonElement,
    private decryptButton: HTMLButtonElement,
    private copyButton: HTMLButtonElement,
    private outputTitle: HTMLHeadingElement
  ) {
    this.initializeEventListeners();
  }

  private initializeEventListeners(): void {
    this.encryptButton.addEventListener("click", this.handleEncrypt.bind(this));
    this.decryptButton.addEventListener("click", this.handleDecrypt.bind(this));
    this.copyButton.addEventListener("click", this.handleCopy.bind(this));
  }

  private handleEncrypt(e: Event): void {
    e.preventDefault();
    const message = this.textInput.value;
    const encryptedMessage = MessageCipher.encrypt({ message, key: this.KEY });

    this.textOutput.textContent = encryptedMessage;
    this.outputTitle.style.display = "none";
    this.decryptButton.disabled = false;
    this.copyButton.style.display = "block";
  }

  private handleDecrypt(e: Event): void {
    e.preventDefault();
    const message = this.textOutput.textContent || "";
    const decryptedMessage = MessageCipher.decrypt({ message, key: this.KEY });

    this.textOutput.textContent = decryptedMessage;
    this.decryptButton.disabled = true;
  }

  private async handleCopy(e: Event): Promise<void> {
    e.preventDefault();
    const message = this.textOutput.textContent || "";

    try {
      await navigator.clipboard.writeText(message);
      alert("Texto copiado com sucesso.");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  }
}
