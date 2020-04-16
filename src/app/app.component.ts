import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  /**
   * Passo 1 criamos a variavel
   */
  urlImagem:string = 'https://images5.alphacoders.com/913/thumb-1920-913696.jpg';
}

/**
 * toda  property binding  é  a propriedade da tag dentro de [propiedade da tag]
 * a variavel é criada dentro do componente
 * e usada dentro do html respectivo
 */
