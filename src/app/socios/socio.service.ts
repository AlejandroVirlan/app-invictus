import { Injectable } from '@angular/core';
import { Socio } from './socio';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private urlEndPoint: string = 'http://localhost:8094/api/socios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getSocios(page, size): Observable<any> {

    const params = new HttpParams()
        .set('page', page)
        .set('size', size);

    return this.http.get(this.urlEndPoint, {params}).pipe(
      map((response: any) => response as Socio[]));
    }

 getSocio(id: number): Observable<Socio> {
   return this.http.get<Socio>(`${this.urlEndPoint}/${id}`);
 }

 updateSocio(socio: Socio): Observable<Socio> {
   return this.http.put<Socio>(`${this.urlEndPoint}/${socio.id}`, socio, {headers: this.httpHeaders});
 }

 deleteSocio(socio: Socio): Observable<Socio> {
   return this.http.put<Socio>(`${this.urlEndPoint}/socio/${socio.id}`, socio, {headers: this.httpHeaders});
 }

}
