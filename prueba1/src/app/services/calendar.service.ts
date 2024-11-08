import { Injectable } from '@angular/core';


declare const gapi: any;
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private readonly CLIENT_ID = '637805065769-dsbs0koum1iqc6gsdrtsnnon7s1fdm31.apps.googleusercontent.com';
  private readonly DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
  private readonly SCOPES = 'https://www.googleapis.com/auth/calendar.events';

  private tokenClient: any;
  private gapiInited = false;
  private gisInited = false;

  constructor() {
    this.loadScripts();
  }

  private loadScripts(): void {
    
    const gapiScript = document.createElement('script');
    gapiScript.src = 'https://apis.google.com/js/api.js';
    gapiScript.async = true;
    gapiScript.defer = true;
    gapiScript.onload = () => this.gapiLoaded();
    document.head.appendChild(gapiScript);

   
    
    const gisScript = document.createElement('script');
    gisScript.src = 'https://accounts.google.com/gsi/client';
    gisScript.async = true;
    gisScript.defer = true;
    gisScript.onload = () => this.gisLoaded();
    document.head.appendChild(gisScript);
  }

  private gapiLoaded(): void {
    gapi.load('client', async () => {
      await gapi.client.init({
        discoveryDocs: this.DISCOVERY_DOCS,
      });
      this.gapiInited = true;
    });
  }

  private gisLoaded(): void {
    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: this.CLIENT_ID,
      scope: this.SCOPES,
      callback: '', 
      
    });
    this.gisInited = true;
  }

  private async waitForInitialization(): Promise<void> {
    return new Promise((resolve) => {
      const checkInit = () => {
        if (this.gapiInited && this.gisInited) {
          resolve();
        } else {
          setTimeout(checkInit, 100);
        }
      };
      checkInit();
    });
  }

  async signIn(): Promise<void> {
    await this.waitForInitialization();
    
    return new Promise((resolve, reject) => {
      try {
        this.tokenClient.callback = async (response: any) => {
          if (response.error) {
            reject(response);
          }
          resolve(response);
        };
        this.tokenClient.requestAccessToken({ prompt: 'consent' });
      } catch (err) {
        console.error('Error en el inicio de sesión:', err);
        reject(err);
      }
    });
  }

  async crearEvento(eventoData: any): Promise<any> {
    await this.signIn(); 
    

    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: eventoData,
      });
      console.log('Evento creado:', response.result);
      return response.result;
    } catch (err) {
      console.error('Error al crear el evento:', err);
      throw err;
    }
  }
 }
