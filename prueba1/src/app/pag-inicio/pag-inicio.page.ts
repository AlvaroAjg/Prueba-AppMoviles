import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.page.html',
  styleUrls: ['./pag-inicio.page.scss'],
})
export class PagInicioPage implements OnInit {
  public usuario: any;
  image: string| undefined;
  
  constructor(private router: Router,public alertCtrl:AlertController) {}
    
    ngOnInit() {
      const navegacion = this.router.getCurrentNavigation();
      this.usuario=navegacion?.extras?.state?.['Usuario'];
    
    }

    goToDashboard() {
      this.router.navigate(['/dashboard']);
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

  async tomarFoto(){
    const image= await Camera.getPhoto({
      quality:90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.image = image.dataUrl;
  }

}
