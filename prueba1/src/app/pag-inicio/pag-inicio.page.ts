import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.page.html',
  styleUrls: ['./pag-inicio.page.scss'],
})
export class PagInicioPage implements OnInit {
  public usuario: any;
  
  constructor(private router: Router,public alertCtrl:AlertController) {}
    
    ngOnInit() {
      const navegacion = this.router.getCurrentNavigation();
      this.usuario=navegacion?.extras?.state?.['Usuario'];
    
    }

    async asisAlert(){
      const alert = await this.alertCtrl.create({
        header:'Asistencia Registrada con exito',
        subHeader: '',
        message:'',
        buttons:[
          {
            text: 'Ok',
            handler:(blah) =>{
                console.log('boton OK');
                
            }
          }
        ]
  
      });
      await alert.present();

}

}
