import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../components/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: AngularFirestore) { }

  agregarUsuario(usuario: any):Promise<any>{
    return this.firestore.collection('usuarios').add(usuario);
  }


  getUsuarios(){
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  eliminarUsuario(id: string): Promise<any> {
    return this.firestore.collection('usuarios').doc(id).delete();
  }
  getUsuario(id: string): Observable<any> {
    return this.firestore.collection('usuarios').doc(id).snapshotChanges();
  }

  editarUsuario(id: string, data:any): Promise<any> {
    return this.firestore.collection('usuarios').doc(id).update(data);
  }


}
