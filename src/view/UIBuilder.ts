import { MessageHandler } from "../service/MessageHandler.js";

export class UIBuilder {
  private static createTextArea(
    className: string,
    placeholder: string = "",
    readonly: boolean = false
  ): HTMLTextAreaElement {
    const textarea = document.createElement("textarea");
    textarea.className = className;
    textarea.placeholder = placeholder;
    textarea.readOnly = readonly;
    return textarea;
  }

  private static createButton(
    className: string,
    text: string
  ): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = `button ${className}`;
    button.textContent = text;
    return button;
  }

  static createUI(): void {
    const root = document.getElementById("root")!;

    const main = document.createElement("main");
    main.className = "content";

    const inputContainer = document.createElement("div");
    inputContainer.className = "text-area-container";

    const textInput = this.createTextArea("text-input", "Digite seu texto");

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const encryptButton = this.createButton("button-primary", "Criptografar");
    const decryptButton = this.createButton(
      "button-secondary",
      "Descriptografar"
    );

    buttonContainer.append(encryptButton, decryptButton);
    inputContainer.append(textInput, buttonContainer);

    const outputContainer = document.createElement("div");
    outputContainer.className = "text-area-container";

    const outputTitle = document.createElement("h2");
    outputTitle.className = "text-output-title";
    outputTitle.id = "outputTitle";
    outputTitle.textContent = "Nenhuma mensagem encontrada";

    const textOutput = this.createTextArea("text-output", "", true);
    const copyButton = this.createButton("button-secondary", "Copiar");
    const copyButtonContainer = document.createElement("div");
    copyButtonContainer.className = "button-container";
    copyButton.style.display = "none";
    copyButtonContainer.appendChild(copyButton);

    outputContainer.append(textOutput, outputTitle, copyButtonContainer);

    const footer = document.createElement("footer");
    footer.className = "baseboard";

    const footerContent = document.createElement("p");
    footerContent.innerHTML =
      'Made by -><a class="baseboard-link" href="https://github.com/Acauhi99">Acauhi</a><-';

    footer.appendChild(footerContent);

    main.append(inputContainer, outputContainer);
    root.append(main, footer);

    new MessageHandler(
      textInput,
      textOutput,
      encryptButton,
      decryptButton,
      copyButton,
      outputTitle
    );
  }
}
