import { Component, OnInit } from '@angular/core';
import { entradaAumento, entradaLeftRightSvg, entradaLeftRightTexto } from 'src/app/animation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    entradaLeftRightSvg,
    entradaLeftRightTexto,
    entradaAumento
  ]
})
export class InicioComponent implements OnInit {
  UrlImg = environment.UrlImg;
  entradaAnimacion = false;

  constructor() {document.documentElement.scrollTop = 0;}

  ngOnInit(): void {
    this.entradaAnimacion = !this.entradaAnimacion;
  }

}
