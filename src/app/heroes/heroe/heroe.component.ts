import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class  HeroeComponent{
      alterEgo:string = 'IronMan'
      nombre  : string = 'Tony Start';
      edad    :number = 45 ;
      vocacion: string = ' vengador';


      get nombreCapitalizado(): string {
         return this.nombre.toLocaleUpperCase();
      }

      obtenerNombre():string{
        return `${ this.nombre} - ${this.edad}`;
      }

      cambiaNombre():void{
        this.nombre = 'Andrew Garfiel';
        this.alterEgo = 'SpiderMan';

      }


      cambiaEdad():void{
        this.edad = 25;
      }
}