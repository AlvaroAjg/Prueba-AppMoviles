import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/'; // URL del servidor JSON

  constructor(private http: HttpClient) {}

  // Métodos para interactuar con los endpoints
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alumnos`);
  }


}
