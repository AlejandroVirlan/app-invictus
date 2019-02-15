import { Component, OnInit } from '@angular/core';
import { Socio } from './socio';
import { SocioService } from './socio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './usuario';

@Component({
  selector: 'app-formsocios',
  templateUrl: './formsocios.component.html',
  styleUrls: ['./formsocios.component.css']
})
export class FormsociosComponent implements OnInit {

  socio: Socio = new Socio();

  constructor(private socioService: SocioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarSocio();
    this.socio.usuario = new Usuario()
  }

  cargarSocio(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.socioService.getSocio(id).subscribe(
          socio => this.socio = socio
        );
      }
    });
  }
  
  public update(): void {
    this.socioService.updateSocio(this.socio).subscribe(
      socio => {
        this.router.navigate(['/socios']);
      });
    }
  }
