export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(mensagem: T): void {
    this.elemento.innerHTML = this.template(mensagem);
  }

  abstract template(mensagem: T): string;
}
