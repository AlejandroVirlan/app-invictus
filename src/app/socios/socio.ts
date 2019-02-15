import { Usuario } from './usuario';

/* Clase Socio que guarda los datos que se pide 
 * al usuario para registrarse con un constructor que 
 * inicializa todos los atributos 
 */

export class Socio {
    id: number;
    dni: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    movil: string;
    foto: string;
    usuario: Usuario;
    roles: string[];

    constructor(){}
    
}
