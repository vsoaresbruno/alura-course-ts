export class NegociacoesView {
  private elemento: HTMLElement;
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }
  template(): string {
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

  update(): void {
    this.elemento.innerHTML = this.template();
  }
}
