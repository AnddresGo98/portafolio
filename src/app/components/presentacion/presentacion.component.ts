import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(["inicio"]);  
    }, 5500);
  }

  ngOnInit(): void {
  }

}
