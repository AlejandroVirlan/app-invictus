//Import para indicar que es una clase de tipo Service
import { Injectable } from '@angular/core';

/* Imports para poder trabajar con peticiones HTTP (HttpClient) , 
cabeceras HTTP (HttpHeaders) y compartir información entre 
distintos componentes de forma asíncrona, a través de la 
programación reactiva (Observable). */
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

//Imports clases propias
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';


//Constante que contiene las cabeceras HTTP
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* Atributos que contienen la URL de la API en el Back-End para 
  el login y registro */
  private loginUrl = 'http://localhost:8094/api/auth/signin';
  private signupUrl = 'http://localhost:8094/api/auth/signup';

  //Constructor de la clase con un atributo HttpClient inicializado
  constructor(private http: HttpClient) { }

  /*
  Declaración de los métodos REST para el registro y el login,
  
  Para cada verbo http tenemos su método en el servicio HttpClient. 
  
  Su primer parámetro será la url de la API a la que invocar. 

  Los métodos de envío reciben un AuthLoginInfo en el segundo parámetro 
  y lo envían como objetos JSON.
  
  Y como tercer parámetro mandamos las cabeceras HTTP necesarias que 
  indican que el contenido que se envía es JSON.

  Por último devuelven un JWTResponse en el método para la autenticación
  del login y un string para el registro.
  */
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  //POR COMENTAR
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions)
  }
}
