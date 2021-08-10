import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "presentacion",
    pathMatch: "full"
  },
  {
    path: "presentacion",
    component: PresentacionComponent
  },
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "**",
    redirectTo: "presentacion"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
