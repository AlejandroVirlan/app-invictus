import { Component, OnInit } from '@angular/core';

//Import clase propia
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // array que guarda la información para mostrar el token, los roles y el nombre de usuario
  info: any;

  //Constructor de la clase con un atributo token inicializado
  constructor(private token: TokenStorageService) { }

  //Método que se ejecuta al inicializarse el componente
  ngOnInit() {
    //Obtiene la información y se almacena en this.info
    this.info = {
      token: this.token.getToken(), 
      username: this.token.getUsername(),
      roles: this.token.getAuthorities()
    };
  }

  //Método que cierra sesión y recarga la página
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
