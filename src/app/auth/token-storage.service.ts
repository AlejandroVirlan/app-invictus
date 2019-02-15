//Import para indicar que es una clase de tipo Service
import { Injectable } from '@angular/core';

//Constantes que contienen los valores necesarios para el JWT
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  
  /* Array que contiene los nombres de los Roles que tenga
  un usuario */
  private roles: Array<string> = [];

  constructor() { }
  
  //Método que cierra la sesión del usuario
  signOut() {
    window.sessionStorage.clear();
  }

  //Método que guarda el token de autenticación del JWT en la sesión
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  //Método que obtiene el token de autenticación del JWT en la sesión
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  /* Método que guarda el nombre de usuario del JWT que haya solicitado
  en la sesión */
  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  /* Método que obtiene el nombre de usuario del JWT que haya solicitado
  en la sesión */
  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  /* Método que guarda los roles que tiene el usuario del JWT
  en la sesión */
  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  /* Método que obtiene los roles que tiene el usuario del JWT que haya
  solicitado en la sesión */
  public getAuthorities(): string[] {
    this.roles = [];

    if(sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }

}
