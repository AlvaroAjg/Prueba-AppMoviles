import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular'; // Importamos AlertController


@Component({
  selector: 'app-dash-profe',
  templateUrl: './dash-profe.page.html',
  styleUrls: ['./dash-profe.page.scss'],
})
export class DashProfePage implements OnInit {
  username: string = '';

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private alertController: AlertController 
  ) {}

  
  async presentLogoutAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Cierre de Sesión',
      message: '¿Estás seguro que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          }
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            this.authService.logout();
            this.router.navigate(['/home']); 
            console.log('Sesión cerrada');
          }
        }
      ]
    });

    await alert.present();
  }

  
  logout() {
    this.presentLogoutAlert(); 
  }

  irlista() {
    this.router.navigate(['/lista']); 
  }

  irqr() {
    this.router.navigate(['/qr']); 
  }
  
  

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.username = state?.['username'] || 'Usuario';
  }
}
