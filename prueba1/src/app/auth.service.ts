import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // Simula si el usuario está autenticado
    login(Usuario: string, Password: string): boolean {
// Simulamos una validación de login
if (Usuario === 'usuario' && Password === '1234') {
  this.isAuthenticated = true;
  console.log("esta autenticado");
  return true;
}
  return false;
}

  isLoggedIn(): boolean {
    return this.isAuthenticated;
}
  logout() {
    this.isAuthenticated = false;
}

}
  

