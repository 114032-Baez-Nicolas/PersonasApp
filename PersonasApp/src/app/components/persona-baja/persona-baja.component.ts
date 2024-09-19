import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { IPersonaService } from '../../services/ipersona.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-baja',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-baja.component.html',
  styleUrl: './persona-baja.component.css'
})
export class PersonaBajaComponent implements OnInit {

  oPersonaBaja: Persona[] = [];

  constructor(public personaService: IPersonaService){}

  ngOnInit(): void 
  {
    this.oPersonaBaja = this.personaService.getPersonas();
  }

  eliminarPersona(persona: Persona): void
  {
    alert("La persona N°" + persona.ID + " Se elimino correctamente");
    this.personaService.deletePersona(persona);
  }

}
