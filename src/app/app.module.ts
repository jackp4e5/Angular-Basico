import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//  LO ESTA MENSIONADO QUIERE DECIR QUE YA ESTA EN SU PROPIO MODULO
// import { contadorComponent } from './contador/contador2/contador.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListaComponent } from './heroes/lista/lista.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';//ESTA ESD LA IMPORTACION DEL MODULO DEL CONTADOR 


@NgModule({
  declarations: [
    AppComponent,
    // contadorComponent,

    // HeroeComponent,
    // ListaComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule // SIEMPRE QUE SE HACE UN MODULO SE TIENE QUE IMPORTAR AQUI 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
