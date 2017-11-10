import { Component } from '@angular/core';
import { InformacionService } from "./servicios/informacion.service";
import { ProductosService } from "./servicios/productos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _is: InformacionService,
              public _ps: ProductosService){

  }
}
