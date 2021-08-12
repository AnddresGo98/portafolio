import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  UrlImg = environment.UrlImg;
  constructor() {document.documentElement.scrollTop = 0; }

  ngOnInit(): void {
  }

}
