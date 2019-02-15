/* Clase AuthLoginInfo que guarda el nombre de usuario
 * y el password con un constructor que inicializa ambos
 * atributos.
 */
export class AuthLoginInfo {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}