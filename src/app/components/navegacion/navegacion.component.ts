import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css'],
  animations: [
    trigger('menu1', [
      state('*', style({
        transform: "rotate(0deg)"
      })),
      state('open', style({
        transform: "rotate(45deg)",
        top: "20%"
      })),
      state('closed', style({
        transform: "rotate(0deg)"
      })),
      transition('* <=> *', [
        animate('0.2s')
      ])
    ]),
    trigger('menu2', [
      state('*', style({
        transform: "rotate(0deg) translateY(-50%)",
        top: "50%"
      })),
      state('open', style({
        transform: "rotate(-45deg)",
        top: "20%"
      })),
      state('closed', style({
        transform: "rotate(0deg) translateY(-50%)",
        top: "50%"
      })),
      transition('* <=> *', [
        animate('0.3s')
      ])
    ]),
    trigger('navMobile', [
      state('*', style({
        transform: "translate(-50%, -90vh)"
      })),
      state('open', style({
        transform: "translate(-50%, 0)"
      })),
      state('closed', style({
        transform: "translate(-50%, -90vh)"
      })),
      transition('* <=> *', [
        animate('0.2s')
      ])
    ])
  ]
})
export class NavegacionComponent implements OnInit {

  estadoMenu = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      (this.estadoMenu = false);
    })
   }

  ngOnInit(): void {}

  cambiarEstadoMenu() {
    this.estadoMenu = !this.estadoMenu;
  }
}
