import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-abrir-chamado',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './abrir-chamado.component.html',
  styleUrl: './abrir-chamado.component.css'
})
export class AbrirChamadoComponent {

  servidor = new FormControl

}
