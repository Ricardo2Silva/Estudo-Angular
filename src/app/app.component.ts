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
  //  passo 1

  dataNascimento =new Date();

  // passo 4 ver data no console

  verifica(){
    console.log(this.dataNascimento);

  }

}
