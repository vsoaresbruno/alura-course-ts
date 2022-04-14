export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  public update(mensagem: T): void {
    this.elemento.innerHTML = this.template(mensagem);
  }

  protected abstract template(mensagem: T): string;
}
