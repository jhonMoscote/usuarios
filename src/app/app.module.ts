import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarusuarioComponent } from './components/registrarusuario/registrarusuario.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPermissionsModule } from 'ngx-permissions';
@NgModule({
  declarations: [
    AppComponent,
    RegistrarusuarioComponent,
    IniciarsesionComponent,
    BienvenidosComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,ReactiveFormsModule,FormsModule,AngularFireAuthModule,AngularFirestoreModule,BrowserAnimationsModule, ToastrModule.forRoot(),
    NgxPermissionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
