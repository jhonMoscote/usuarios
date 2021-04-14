import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.scss'],
  providers:[AutenticacionService],
})
export class IniciarsesionComponent implements OnInit {
  loginForm :  FormGroup;
    
  constructor(private rote:Router, private fb: FormBuilder, private auth: AutenticacionService) {

    this.loginForm = this.fb.group({

      correo:['',Validators.required],
      contrasena:['',Validators.required],
    

    }) 
   }

  ngOnInit(): void {

  
   
  
  }

 async  onLogin(){
    const {correo, contrasena}= this.loginForm.value;
    try{
      
      const user = await this.auth.login(correo,contrasena);
      if(user ){
        this.rote.navigate(['/bienvenidos']);
      }

    }catch(error){
      console.log(error);
      
    }
  
   
  }

}
