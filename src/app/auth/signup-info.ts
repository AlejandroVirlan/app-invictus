import { Usuario } from '../socios/usuario';

/* Clase SignUpInfo que guarda los datos que se pide 
 * al usuario para registrarse con un constructor que 
 * inicializa todos los atributos 
 */
export class SignUpInfo {
    dni: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    movil: string;
    foto: string;
    usuario: Usuario;
    roles: string[];

    constructor(dni: string, nombre: string, apellido1: string, apellido2: string, movil: string, foto: string, usuario: Usuario) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.movil = movil;
        this.foto = foto;
        this.usuario = usuario;
        this.roles = ['user'];
    }
}