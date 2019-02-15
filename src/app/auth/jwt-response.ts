/* Clase JwtResponse que contiene los atributos necesarios para 
una autenticación a través de JWT (Json Web Token)  */
export class JwtResponse {
    //Hash del token de acceso 
    accessToken: string;
    //Tipo de esquema de autenticación HTTP, en este caso, Bearer
    type: string;
    //Nombre de usuario que realiza la autenticación
    username: string;
    /*Array de roles autorizados, ya que un usuario puede tener más 
    de un rol */
    authorities: string[];
}