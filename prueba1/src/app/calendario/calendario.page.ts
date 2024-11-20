import { Component } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage {
  eventoData = {
    summary: '',
    description: '',
    location: '',
    start: '',
    end: ''
  };

  constructor(
    private calendarService: CalendarService,
    private router: Router,
    private alertController: AlertController
  ) {

    const currentDate = new Date();
    this.eventoData.start = currentDate.toISOString();
    this.eventoData.end = new Date(currentDate.getTime() + 60 * 60 * 1000).toISOString();  
  }

  async crearEvento() {
    const event = {
      summary: this.eventoData.summary,
      location: this.eventoData.location,
      description: this.eventoData.description,
      start: {
        dateTime: new Date(this.eventoData.start).toISOString(),
        timeZone: 'America/Santiago'
      },
      end: {
        dateTime: new Date(this.eventoData.end).toISOString(),
        timeZone: 'America/Santiago'
      }
    };

    try {
      await this.calendarService.crearEvento(event);
      console.log('Evento creado exitosamente');

      this.mostrarAlerta('Listo', 'El evento se creó correctamente.');
    } catch (err) {
      console.error('Error al crea// Mostrar alerta de error')
      this.mostrarAlerta('Error', 'Hubo un problema al crear el evento.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
