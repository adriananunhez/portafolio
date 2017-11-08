import { Component } from '@angular/core';
import { InformacionService } from "../../servicios/informacion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public _is:InformacionService){}
}
