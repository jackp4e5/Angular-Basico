import { NgModule } from "@angular/core";// ESTA ES A IMPORTACION DE @NGMODULE
import { contadorComponent } from './contador2/contador.component';


@NgModule({

    declarations:[
      contadorComponent,
    ],

    exports:[
        contadorComponent,
    ]
})


export class ContadorModule{} // ESTE ES EL NOMBRE  QUE SE DEBE IMPORTAR EN EL MODUO PRINCIPAL