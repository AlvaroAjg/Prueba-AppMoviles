import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAunthenticate = false;

  login(Usuario: string, Password: string): boolean {
    if (Usuario === 'Alvaro' && Password === '1234'){
      this.isAunthenticate = true;
     
     return true; 
    }
    return false;
  }
  isLoggedIn(): boolean {
      return this.isAunthenticate;
  }
  logout() {
    this.isAunthenticate = false;
  }
  irainicio(){
    this.isAunthenticate = false;
  }
}
