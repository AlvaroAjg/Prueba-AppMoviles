import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class listaPage implements OnInit {
  
  alumnos: any[] = []; 
 
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.alumnos = data;
        console.log('alumnos:', this.alumnos);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
