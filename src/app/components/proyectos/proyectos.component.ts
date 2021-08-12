import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  UrlImg = environment.UrlImg;
  datosProyectos = [
    {
      "img": `${this.UrlImg}img/proyectoPortafolio.jpg`,
      "nombre": "Portafolio",
      "urlGitHub": "https://github.com/AnddresGo98/portafolio",
      "urlPagina": "http://jagf98.byethost7.com/portafolio/"
    },
    {
      "img": `${this.UrlImg}img/proyectoLatin.jpg`,
      "nombre": "Latin America Trip",
      "urlGitHub": "https://github.com/AnddresGo98/LatinAmericaTrip",
      "urlPagina": "http://jagf98.byethost7.com/latinamericatrip/client/#/inicio"
    }
  ];

  pathPoyecto = 'M410 100 500 10 500 10 590 100 590 900 500 990 500 990 410 900 Z';

  constructor() { 
    setTimeout(() => {
      this.pathPoyecto = 'M10 100 100 10 900 10 990 100 990 900 900 990 100 990 10 900 Z';
    }, 500);
  }

  ngOnInit(): void {
    
  }

}
