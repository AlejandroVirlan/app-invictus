import { Component, OnInit } from '@angular/core';

//Imports clases propias
import { AuthService } from '../auth/auth.service';
import { Usuario } from '../socios/usuario';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  //Array que guarda los valores de los campos del registro del usuario
  form: any = {};
  //Objeto para poder acceder a la información que contiene la clase SignUpInfo
  signupInfo: SignUpInfo;
  //Booleano para comprobar si se ha registrado
  isSignedUp = false;
  //Booleano para comprobar si ha fallado el registro
  isSignUpFailed = false;
  //Variable que almacena el mensaje de error en caso de fallar el registro
  errorMessage = '';

  //Constructor de la clase con el atributo authService inicializado
  constructor(private authService: AuthService) { }

  //Método que se ejecuta al inicializarse el componente
  ngOnInit() {
    //inicializar el objeto usuario
    this.form.usuario = new Usuario()
  }
  
  //Método que se ejecuta al enviar los datos de registro
  onSubmit() {
    console.log(this.form);

     //Se crea un nuevo objeto Socio con los datos enviados en el login
    this.signupInfo = new SignUpInfo(
      this.form.dni,
      this.form.nombre,
      this.form.apellido1,
      this.form.apellido2,
      this.form.movil,
      this.form.foto,
      this.form.usuario
    );

    //Método Observable que es lanzado a través del subscribe
    this.authService.signUp(this.signupInfo).subscribe(

      //Se rellena los datos del callback data del subscribe
      data => {
        //Se muestra en consola el contenido del callback data en formato en JSON
        console.log(data);
         /* Se marca que se ha registrado el usuario y que no ha fallado 
         el registro */
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },

      //Si hubiera error, se rellena los datos del callback de error
      error => {
        //Se muestra en consola el contenido del callback error en formato en JSON
        console.log(error);
        /* Almacena el mensaje de error que ha ocurrrido y marca que 
        ha habido un fallo en el registro */
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
