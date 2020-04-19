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
   * Passo 1 criamos a function
   */
   aoClicarEvento (){
     alert('botao pressionado')
   }

   aoPassar (){
     console.log('passou o mouse aqui')
   }

   aoRetirar (){
     console.log('retirou o mouse');

   }


}
// comentario
/**
 * todo event binding é criado uma funcao que será amarrada ao evento seguido  de (evento) * no html passo 2
 * a funcao é criada dentro do componente
 * e usada dentro do html respectivo dentro da tag onde será utilizada
 */
