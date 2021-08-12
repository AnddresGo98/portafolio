import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  UrlImg = environment.UrlImg;
  datosHabilidades = [
    {
      "logo": `${this.UrlImg}img/html_icon.png`,
      "titulo": "Html",
      "progress": "90%",
    },
    {
      "logo": `${this.UrlImg}img/css_icon.png`,
      "titulo": "CSS",
      "progress": "90%",
    },
    {
      "logo": `${this.UrlImg}img/js_icon.png`,
      "titulo": "JavaScript",
      "progress": "50%",
    }
    ,
    {
      "logo": `${this.UrlImg}img/angular_icon.png`,
      "titulo": "Angular",
      "progress": "30%",
    },
    {
      "logo": `${this.UrlImg}img/php_icon.png`,
      "titulo": "PHP",
      "progress": "40%",
    },
    {
      "logo": `${this.UrlImg}img/mySql_icon.png`,
      "titulo": "MySql",
      "progress": "50%",
    },
    {
      "logo": `${this.UrlImg}img/gitHub_icon.png`,
      "titulo": "GitHub",
      "progress": "40%",
    }
  ]
  constructor() { document.documentElement.scrollTop = 0;}

  ngOnInit(): void {
  }

}
