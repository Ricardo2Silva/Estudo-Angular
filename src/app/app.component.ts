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
  nome:string ='Ricardo Jonas';


  /**
   * Passo 2 criamos a function
  */
  atualizar(valor:string){

    this.nome = valor
  }


}

/**

 */
