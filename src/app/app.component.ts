import { Component, OnInit } from '@angular/core';
import {Carro} from './carro.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

 export class AppComponent  implements OnInit{ //passo 2
  // passo 1
  carro:Carro;

  // passo 3 (esse metodo é executado antes na inicializaçao do componente)
  ngOnInit(){

    console.log('iniciando componente');
    this.carro ={nome:'punto', ano: 2010}
  }
}
