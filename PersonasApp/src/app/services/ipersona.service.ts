import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class IPersonaService {

  private lPersonaAlta: Persona[] = [];
  public lNumero: number = 1;

  constructor() { }

  //1) Añadir una persona
  addPersona(persona: Persona): void {
    this.lPersonaAlta.push(persona);
    this.lNumero++;
  }

  //2) Mostrar listado de personas
  getPersonas(): Persona[] {
    return this.lPersonaAlta;
  }

  //3) Eliminar una persona
  deletePersona(persona: Persona): void {
    const index = this.lPersonaAlta.indexOf(persona);
    this.lPersonaAlta.splice(index, 1);
  }
}
