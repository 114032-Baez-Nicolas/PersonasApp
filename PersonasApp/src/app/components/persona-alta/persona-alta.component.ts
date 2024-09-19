import { Component } from '@angular/core';
import { Persona } from '../../models/Persona';
import { IPersonaService } from '../../services/ipersona.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonaViewComponent } from "../persona-view/persona-view.component";
import { PersonaBajaComponent } from "../persona-baja/persona-baja.component";

@Component({
  selector: 'app-persona-alta',
  standalone: true,
  imports: [CommonModule, FormsModule, PersonaViewComponent, PersonaBajaComponent],
  templateUrl: './persona-alta.component.html',
  styleUrl: './persona-alta.component.css'
})
export class PersonaAltaComponent {

  ID?: number;
  Nombre?: string;
  Apellido?: string;
  Edad?: number;
  Genero?: string;

  limpiarCampos()
  {
    this.Nombre = "";
    this.Apellido = "";
    this.Edad = undefined;
    this.Genero = "";
  }

  ultimoId()
  {
    return this.personaService.getPersonas().length + 1;
  }

  constructor(public personaService : IPersonaService) {}

  enviarForm()
  {
    if(this.ultimoId() > 0 && this.Nombre != null && this.Apellido != null 
    && this.Edad != null && this.Genero != null)
    {
      const nuevaPersona: Persona = 
      {
        ID: this.personaService.lNumero,
        Nombre: this.Nombre,
        Apellido: this.Apellido,
        Edad: this.Edad,
        Genero: this.Genero
      }

      alert("La persona N°" + nuevaPersona.ID + " Se agrego correctamente!");
      this.personaService.addPersona(nuevaPersona);
      this.limpiarCampos();
    }
  }
}
