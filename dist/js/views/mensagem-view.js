import { View } from './view.js';
export class MensagemView extends View {
    template(mensagem) {
        return `
        <div class="alert alert-info">
            ${mensagem}
        </div>
    `;
    }
}
