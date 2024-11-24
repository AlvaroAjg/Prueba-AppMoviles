import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.page.html',
  styleUrls: ['./pag-inicio.page.scss'],
})
export class PagInicioPage implements OnInit {
  public usuario: any;
  image: string| undefined;

  scanResult='';
  
  constructor(private router: Router,public alertCtrl:AlertController, private modalController: ModalController,private platform:Platform) {}

    async startScan() {
      const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      cssClass: 'barcode-scanning-modal',
      showBackdrop: false,
      componentProps: { 
        formats: [],
        lensFacing: LensFacing.Back
       }
      });
    
      await modal.present();
      const {data}= await modal.onWillDismiss();
      if (data){
        this.scanResult=data?.barcode?.displayValue;
      }
    
    }

    
    ngOnInit() {
      const navegacion = this.router.getCurrentNavigation();
      this.usuario=navegacion?.extras?.state?.['Usuario'];
      if (this.platform.is('capacitor')){
        BarcodeScanner.isSupported().then();
        BarcodeScanner.checkPermissions().then();
        BarcodeScanner.removeAllListeners();
      }
    
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
