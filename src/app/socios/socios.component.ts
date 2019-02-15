import { Component, OnInit } from '@angular/core';
import { Socio } from './socio';
import { SocioService } from './socio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  socios: Socio[];
  paginador: any;

  constructor(private socioService: SocioService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activateRoute.queryParamMap.subscribe(params => {
      let page: number = +params.get('page');
      let size: number = +params.get('size');

      if (!page) {
        page = 0;
        size = 4;
      }

      this.socioService.getSocios(page, size).subscribe(response => {
        this.socios = response.content as Socio[];
        this.paginador = response;
      });
    });
  }

  public delete(socio: Socio): void {
    // Establezco el valor antes de hacer put en la base de datos
    socio.usuario.enabled = false;
    // A partir de aquí se realiza el put del socio
    this.socioService.deleteSocio(socio).subscribe(
      response => {
        this.socios = this.socios.filter(soc => soc.usuario.enabled);
        console.log(this.socios);
      });
    }
}
