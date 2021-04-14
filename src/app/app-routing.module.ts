import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { RegistrarusuarioComponent } from './components/registrarusuario/registrarusuario.component';
import {GuardService} from '../app/service/guard.service';
const routes: Routes = [
  {path: '', component: IniciarsesionComponent},
  {path: 'registrarusuario', component: RegistrarusuarioComponent},
  {path: 'iniciarsesion', component:IniciarsesionComponent},
  {path:'bienvenidos', component: BienvenidosComponent,  canActivate: [GuardService]},
  {path: 'editar-usuario/:id', component:EditarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
