import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {first} from 'rxjs/operators';
import { Usuario } from '../components/usuario';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
public usuario :Usuario;
  constructor(public  afAuth: AngularFireAuth) { 

    
  }
 async login(correo: string, contrasena:string){
   try{
    const result = await this.afAuth.signInWithEmailAndPassword(
      correo,contrasena
    );
    return result;
   }catch(error){
    console.log(error);
    
   }
 
 
  }
  async registrar(correo:string, contrasena:string){
    const result = await  this.afAuth.createUserWithEmailAndPassword(
      correo,
      contrasena
    );
  }
  async logout(){
    try{
    await this.afAuth.signOut();
  }catch(error){
    console.log(error);
    
  }

  }
  getUser(){
    return this.afAuth.authState.pipe(first()).toPromise();

  }
}
