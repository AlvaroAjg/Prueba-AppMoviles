import { Component } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { Router } from '@angular/router';

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

  constructor(private calendarService: CalendarService, private router:Router) {}

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
    } catch (err) {
      console.error('Error al crear el evento:', err);
    }
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
