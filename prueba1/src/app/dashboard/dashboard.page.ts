import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular'; // Importamos AlertController

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: string = '';

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private alertController: AlertController // Inyectamos AlertController
  ) {}

  // Mostrar la alerta de confirmación de cierre de sesión
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
            this.authService.logout(); // Cerrar sesión
            this.router.navigate(['/home']); // Redirigir al home
            console.log('Sesión cerrada');
          }
        }
      ]
    });

    await alert.present();
  }

  // Método que se ejecuta al hacer clic en "Volver"
  logout() {
    this.presentLogoutAlert(); // Mostrar alerta de confirmación
  }

  // Navegar a registrar sin mostrar alerta
  irainicio() {
    this.router.navigate(['/pag-inicio']); // Navegar a la página de inicio de registro
  }

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.username = state?.['username'] || 'Usuario';
  }
}
