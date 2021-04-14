import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  id: string | null;
 

   editarUsuario: FormGroup;
   submitted: boolean;
   correo: string;
   contrasena:string;
 
    
   constructor(private _usuarioServices: UsuarioService, private fb: FormBuilder, private router:Router,private aRoute: ActivatedRoute, private toastr:ToastrService) { 
 
     this.editarUsuario = this.fb.group({
 
       nombre:['',Validators.required],
       correo:['',Validators.required],
       identificacion:['',Validators.required],
       celular:['',Validators.required],
       contrasena:['', Validators.required],
       
 
     }) 
 
     this.id = this.aRoute.snapshot.paramMap.get('id');
     
   }
 
   ngOnInit(): void {
     this.verEditado()
   }
 
  
   verEditado() {
  
    if (this.id !== null) {
      this._usuarioServices. getUsuario(this.id).subscribe(data => {
        this.editarUsuario.setValue({
          nombre: data.payload.data()['nombre'],
          correo: data.payload.data()['correo'],
          identificacion: data.payload.data()['identificacion'],
          celular: data.payload.data()['celular'],
          contrasena: data.payload.data()['contrasena']
        })
      })
    }
  }

  editar(){
    this.editarUsuarios(this.id);
  }

  editarUsuarios(id: string) {
    id= this.id;
    const usuario: any = {
      nombre: this.editarUsuario.value.nombre,
      correo: this.editarUsuario.value.correo,
      identificacion: this.editarUsuario.value.identificacion,
      celular: this.editarUsuario.value.celular,
      contrasena: this.editarUsuario.value.contrasena      
   
    }



    this._usuarioServices.editarUsuario(id,usuario).then(() => {
    
      this.toastr.info('El usuario fue modificado con exito', 'usuario modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/bienvenidos']);
    })
  }




}
   

  

 
     
 
 
 

