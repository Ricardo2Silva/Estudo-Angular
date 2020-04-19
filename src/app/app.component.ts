import { Component } from '@angular/core';
import {Carro} from './carro.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {
  // passo 2
  carros:Carro[]=[
    {nome:'Punto',ano:2010},
    {nome:'I30',ano:2011},
    {nome:'Opala',ano:1990},
    {nome:'Honda',ano:2016}
  ]

}
// também é preciso usar o * no ngFor para utlizar ele na forma sugar sintax
// ngClass deve estar dentro de [] e recebe um objeto com o atributo e colocamos a condicao,ver exemplo no html
