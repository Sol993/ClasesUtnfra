import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tranajando en clase!';
  name: string;
 
 ///usuario = { email: '', pass: '' };
 usuario = new Usuario();

  Ingresar() {
    console.log(this.usuario);
  }

}
