import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagInicioPageRoutingModule } from './pag-inicio-routing.module';

import { PagInicioPage } from './pag-inicio.page';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagInicioPageRoutingModule
  ],
  declarations: [PagInicioPage, BarcodeScanningModalComponent]
})
export class PagInicioPageModule {}
