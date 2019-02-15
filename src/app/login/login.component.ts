import { Component, OnInit } from '@angular/core';

//Imports clases propias
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Array que guarda los valores de los campos del login
  form: any = {}
  //Booleano para comprobar si está logueado
  isLoggedIn = false;
  //Booleano para comprobar si ha fallado el login
  isLoginFailed = false;
  //Variable que almacena el mensaje de error en caso de fallar el login
  errorMessage = '';
  //Array de string que almacena los nombres de los roles que tenga el usuario
  roles: string[] = [];
  //Objeto para poder acceder a la información que contiene la clase AuthLoginInfo
  private loginInfo: AuthLoginInfo;

  //Constructor de la clase con los atributos authService y tokenStorage inicializados
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  //Método que se ejecuta al inicializarse el componente
  ngOnInit() {
    /* Se comprueba si se ha obtenido el token, se confirma que el usuario
    está logueado y se muestran los roles de este usuario */
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  //Método que se ejecuta al enviar los datos de login
  onSubmit() {
    //Se muestra en consola el contenido del array form en formato en JSON
    console.log(this.form);
    
    //Se crea un nuevo objeto Usuario con los datos enviados en el login
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);
      
    //Método Observable que es lanzado a través del subscribe
    this.authService.attemptAuth(this.loginInfo).subscribe(
      //Se rellena los datos del callback data del subscribe
      data => {
        //Almacenamos los datos del JWT en la sesión
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        
        /* Se marca que no ha fallado el login y que está logueado,
        además de mostrar los roles del usuario en el momento de
        haber iniciado sesión y se recarga la página */
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },

      //Si hubiera error, se rellena los datos del callback de error
      error => {
        //Se muestra en consola el contenido del callback error en formato en JSON
        console.log(error);
        /* Almacena el mensaje de error que ha ocurrrido y marca que 
        ha habido un fallo en el login */
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  //Método que recarga la página
  reloadPage() {
    window.location.reload();
  }

}
