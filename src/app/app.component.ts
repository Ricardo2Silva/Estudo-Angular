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
  atualizar (event: any){

    this.nome = event.target.value
  }

  mudarValor (){
    this.nome = "maça"
  }
  // exemplo 2
  email ='ricardojonasdasilva@gmail.com'

  mudarEmail (value:any){
    this.email = value
  }

}

/**
 todo two way data binding o valor poder ser mudado tanto no ts,quanto no html.
 de forma sincronizada (mudança ocorre em tempo real)
 */
