export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>

            <tbody>
                <!--
                <tr>
                    <td>11/08/2017</td>
                    <td>10</td>
                    <td>100.00</td>
                </tr>
                -->
            </tbody>
        </table>
    `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
