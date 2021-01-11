import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';


//servicios


import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';


import { FormsModule } from '@angular/forms';


const routes: Routes=[

  {path: '', component:InicioComponent , pathMatch:'full'},
  {path:'**', redirectTo:'nosotros' , pathMatch:'full'}


]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
  
    InicioComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(routes),
     FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
