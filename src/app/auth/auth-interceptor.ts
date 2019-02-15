import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from './token-storage.service';

//Constantes que contienen uno de los valores necesarios para el JWT
const TOKEN_HEADER_KEY = 'Authorization';

/* Usamos la implementación de HttpInterceptor con su método
   intercept() para inspeccionar y transformar solicitudes HTTP
   (antes de que se envie al servidor) */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorageService) { }

    /* El HttpRequest ("req") es inspeccionado y enviado al método 
    handle() del objeto HttpHandler ("next").

    El objeto HttpHandler ("next") representa el siguiente interceptor 
    en la cadena de interceptores. El último "next" en la cadena es el 
    HttpClient */
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = this.token.getToken();
        if(token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        /*El método handle() transforma el HttpRequest en un 
        Observable, ya que incluye la respuesta del servidor*/
        return next.handle(authReq);
    }
}

//POR COMENTAR
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
