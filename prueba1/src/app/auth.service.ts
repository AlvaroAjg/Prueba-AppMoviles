import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAunthenticate = false;
  private currentUser:{usuario: string; role: string} |null=null;

  login(Usuario: string, Password: string): boolean {
    if (Usuario === 'Alvaro' && Password === '1234'||Usuario === 'Profesor' && Password === '1234'){
      this.isAunthenticate = true;
      if (Usuario === 'Alvaro'){
        this.currentUser = { usuario: 'Alvaro',role: 'alumno'};
      }else if (Usuario=== 'Profesor'){
      this.currentUser = { usuario: 'Profesor',role: 'profesor'};
      }

     return true; 
    }
    return false;
  }
  isLoggedIn(): boolean {
      return this.isAunthenticate;
  }
  getCurrentUser(): { usuario: string; role: string } | null {
    return this.currentUser;
  }
  getUserRole(): string | null {
    return this.currentUser ? this.currentUser.role : null;
  }
 
  logout() {
    this.isAunthenticate = false;
    this.currentUser = null;
  }
  irainicio(){
    this.isAunthenticate = false;
  }
}
