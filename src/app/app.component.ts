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
   *
  */
  idade: number;


  /**
   * Passo 2 criamos a function
  */
  verificarIdade(idade:number){

    this.idade =idade
  }


}

/**

 */
