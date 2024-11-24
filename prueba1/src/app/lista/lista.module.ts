import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { listaPage } from './lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule
  ],
  declarations: [listaPage]
})
export class ListaPageModule {}
