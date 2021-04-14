import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AutenticacionService,private router:Router) { }
  public async canActivate()
  {
    
    const user =  this.auth.login('carlos@gmail.com ','123456');
   if (user !== user) //Obtenemos en nuestro servicio el rol y nos fijamos si es igual o no al de 'Admin 
  {
            console.log('Usted no posee permisos para acceder a esta ruta');
            this.router.navigate(['/editar-usuario']); //Lo enviamos a la página que queramos
            return false;
   }
    return true; //Este camino deja continuar con la vista con normalidad
  }
}
