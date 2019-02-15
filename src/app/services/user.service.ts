//Import para indicar que es una clase de tipo Service
import { Injectable } from '@angular/core';

/* Imports para poder trabajar con peticiones HTTP (HttpClient) , 
y compartir información entre distintos componentes de forma 
asíncrona, a través de la programación reactiva (Observable). */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /* Atributos que contienen la URL de la API en el Back-End para 
  poder acceder los usuarios con sus respectivos permisos según sus 
  roles */
  private userUrl = 'http://localhost:8094/api/test/user';
  private pmUrl = 'http://localhost:8084/api/test/pm';
  private adminUrl = 'http://localhost:8094/api/test/admin';

  //Constructor de la clase con un objeto HttpClient inicializado
  constructor(private http: HttpClient) { }

  /*
  Declaración de los métodos REST para las distintas páginas a las que
  tienen acceso los usarios.
  
  Para cada verbo http tenemos su método en el servicio HttpClient. 
  
  Su primer parámetro será la url de la API a la que invocar. 

  Los métodos de envío reciben un string en el segundo parámetro 
  y lo envían como objetos JSON.
  
  Por último devuelven un string en el método como prueba.
  */
  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
