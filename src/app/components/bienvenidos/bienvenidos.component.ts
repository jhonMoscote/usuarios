import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.scss'],
  providers:[AutenticacionService]
})
export class BienvenidosComponent implements OnInit {
public logueado = false;
usuarios :any[]= [];
  constructor(private auth: AutenticacionService, private _usuarioServices: UsuarioService, private toastr: ToastrService) { }

 async ngOnInit() {
    console.log("bienvenidos");
    const user = await this.auth.getUser();
    if(user){
      this.logueado = true;
      console.log('users->', user);
    }
    this.mostrarUsuarios()
  }

  mostrarUsuarios(){

    this._usuarioServices.getUsuarios().subscribe(data=>{
      this.usuarios = [];
      data.forEach((element:any)=>{
        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.usuarios)
     

    })
  }

  eliminarUsuario(id: string) {
    this._usuarioServices.eliminarUsuario(id).then(() => {
      console.log('empelado eliminado con exito');
      this.toastr.error('El empleado fue eliminado con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

 





}
