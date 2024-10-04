import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Usuario: string = "";
  public Password: string = "";

  constructor(private navCtrl:NavController,private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.Usuario, this.Password)) {
    //aprovechamos de usar state para llevar la informacion al dashboard.
      this.router.navigate(['/dashboard'], { state: { username: this.Usuario } });
    } else {
    alert('Nombre de usuario o contraseña incorrectos');
    }
  }
    

 
  irPaginaContra(){
    this.navCtrl.navigateForward('/contra');
  }


  }
