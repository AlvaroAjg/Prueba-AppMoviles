import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController) {}
  public Usuario: string = "";
  public Password: string = "";

  irPaginaInicio(){
    const state={
      Usuario:this.Usuario
    }
    this.navCtrl.navigateForward('/pag-inicio',{state});
  }
  irPaginaContra(){
    this.navCtrl.navigateForward('/contra');
  }
}
