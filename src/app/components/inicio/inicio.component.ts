import { Component, OnInit } from '@angular/core';
import { aumentoImg, LeftRightTexto, LeftRightSvg, svgCircle1, svgCircle2, svgCircle3} from 'src/app/animation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    LeftRightTexto,
    aumentoImg,
    LeftRightSvg,
    svgCircle1,
    svgCircle2,
    svgCircle3
  ]
})
export class InicioComponent implements OnInit {
  UrlImg = environment.UrlImg;

  constructor() {document.documentElement.scrollTop = 0;}

  ngOnInit(): void {}

}
