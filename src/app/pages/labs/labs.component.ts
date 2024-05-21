import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = [
    'Instalar',
    'Crear proyecto',
    'Crear Componentes'
  ];
  name = 'Nicolas';
  age = 18
}
