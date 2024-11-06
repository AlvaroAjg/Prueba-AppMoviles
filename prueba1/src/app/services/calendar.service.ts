import { Injectable } from '@angular/core';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  CLIENT_ID = '"637805065769-hejs1g9jn3mut2m9pqlg62cvor7f9e87.apps.googleusercontent.com"';
  DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  SCOPES = "https://www.googleapis.com/auth/calendar.events";

  constructor() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: this.CLIENT_ID,
        discoveryDocs: this.DISCOVERY_DOCS,
        scope: this.SCOPES
      });
    });
  }

  async signIn() {
    const GoogleAuth = gapi.auth2.getAuthInstance();
    await GoogleAuth.signIn();
  }

  async addEvent(summary: string, location: string, description: string, startTime: Date, endTime: Date) {
    const event = {
      summary,
      location,
      description,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'America/Santiago' 
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'America/Santiago'
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 10 }
        ]
      }
    };

    await gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event
    });
  }
}
