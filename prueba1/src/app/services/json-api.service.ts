import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonApiService {
  private baseUrl = 'http://localhost:3000'; // URL del servidor JSON

  constructor(private http: HttpClient) {}

  // Obtener usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alumnos`);
  }

  // Agregar un usuario
  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/alumnos`, user);
  }
}
