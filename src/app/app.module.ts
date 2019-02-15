import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatorComponent } from './paginator/paginator.component';

import { RouterModule, Routes } from '@angular/router';
// Este import conecta con el backend de Spring en este caso
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { SociosComponent } from './socios/socios.component';
import { SocioService } from './socios/socio.service';
import { FormsociosComponent } from './socios/formsocios.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';


const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: RegistroComponent},
  {path: 'socios', component: SociosComponent},
  {path: 'socios/form/:id', component: FormsociosComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginatorComponent,
    SociosComponent,
    FormsociosComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SocioService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
