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
  titulo: string = 'meu primeiro app com angular';

  //exemplo 2

  idade: number =10;
}

/**
 * toda interpolacao é seguida  de {{ variavel}}
 * a variavel é criada dentro do componente
 * e usada dentro do html respectivo
 */
