import { View } from './view.js';

export class MensagemView extends View<string> {
  protected template(mensagem: string): string {
    return `
        <div class="alert alert-info">
            ${mensagem}
        </div>
    `;
  }
}
