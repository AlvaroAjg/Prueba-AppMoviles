import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { JsonApiService } from '../services/json-api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class listaPage implements OnInit {
  alumnos: any[] = [];

  constructor(
    private apiService: ApiService,
    private jsonApiService: JsonApiService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.jsonApiService.getUsers().subscribe(
      (data) => {
        this.alumnos = data;
        console.log('alumnos:', this.alumnos);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  goToDashboard() {
    this.router.navigate(['/dash-profe']);
  }

  async registrarAsistencia() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Asistencia registrada con éxito',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
