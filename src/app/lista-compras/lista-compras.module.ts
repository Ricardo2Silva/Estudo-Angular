import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import {ListaComprasContainerComponent} from './lista-compras-container/lista-compras-container.component'
import {ListaComprasContadorComponent} from './lista-compras-contador/lista-compras-contador.component'
import {ListaComprasItemComponent} from './lista-compras-item/lista-compras-item.component'
import {ListaComprasFormularioComponent} from './lista-compras-formulario/lista-compras-formulario.component'

// services
import {CategoriaService} from '../shared/services/categoria.service'
import { ListaComprasService } from './services/lista-compras.service';


// criamos os componentes  e importamos dentro do module
@NgModule({
  declarations:[
    ListaComprasContainerComponent,
    ListaComprasContadorComponent,
    ListaComprasItemComponent,
    ListaComprasFormularioComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    ListaComprasContainerComponent
  ],
  providers:[CategoriaService,ListaComprasService]

})

export class ListaComprasModule{

}
