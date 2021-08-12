import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"presentacion",
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
    path: "about",
    component: AboutComponent
  },
  {
    path: "proyectos",
    component: ProyectosComponent
  },
  {
    path: "skills",
    component: SkillsComponent
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
