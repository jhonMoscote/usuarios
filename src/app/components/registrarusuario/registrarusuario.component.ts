import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.scss']
})
export class RegistrarusuarioComponent implements OnInit {
  crearUsuario: FormGroup;
  submitted: boolean;
  correo: string;
  contrasena:string;

   
  constructor(private _usuarioServices: UsuarioService, private fb: FormBuilder, private router:Router,private auth: AngularFireAuth,private toastr:ToastrService) { 

    this.crearUsuario = this.fb.group({

      nombre:['',Validators.required],
      correo:['',Validators.required],
      identificacion:['',Validators.required],
      celular:['',Validators.required],
      contrasena:['', Validators.required],
      

    }) 


    
  }

  ngOnInit(): void {
    
  }

  registrarUsuario(){

    this.submitted =true;
    if(this.crearUsuario.invalid){
 
      return;
    }
    this.correo = this.crearUsuario.value.correo;
    this.contrasena = this.crearUsuario.value.contrasena;
    const registroUsuario: any={

      nombre: this.crearUsuario.value.nombre,
      correo: this.crearUsuario.value.correo,
      identificacion: this.crearUsuario.value.identificacion,
      celular: this.crearUsuario.value.celular,
      contrasena: this.crearUsuario.value.contrasena
    }
   
    this._usuarioServices.agregarUsuario(registroUsuario).then(()=>{
      console.log("registro exitosos")
      this.toastr.info('El usuario ha sido registrado con exito', 'usuario Registrado', {
        positionClass: 'toast-bottom-right'
      })
    }).catch(error=>{
      console.log(error)
    })
    
   this.registrar(this.correo, this.contrasena)
      this.router.navigate(['/iniciarsesion']);

    }

    

    async registrar(correo:string, contrasena:string){
      const result = await  this.auth.createUserWithEmailAndPassword(
        correo,
        contrasena
      );
    }


  }


