import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
})
export class ContraPage implements OnInit {

  constructor(public alertCtrl: AlertController, private navCtrl:NavController) { }
  Usuario: string='';

  ngOnInit() {
  }
  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header:'Su contraseña ha sido restablecida con exito',
      subHeader: '',
      message:'',
      buttons:[
        {
          text: 'Ok',
          handler:(blah) =>{
              console.log('boton OK');
              this.navCtrl.navigateForward('/home');
          }
        }
      ]
        
    });

    await alert.present();
  }
}
