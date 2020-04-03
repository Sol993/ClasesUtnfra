import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import {Router} from'@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  name: string;
 
 //usuario = { email: '', pass: '' };
 usuario = new Usuario();

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  Ingresar() {
    console.log(this.usuario);

    if (this.usuario.email== 'admin@mail.com'&& this.usuario.pass=='1234')
    {
      //tinen que llegar a la home 
    this.route.navigate(['home']);
    }else{
      //tiene que llegar a error
      this.route.navigate(['error']);
    }
  }
}
