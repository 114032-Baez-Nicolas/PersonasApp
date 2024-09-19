import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { IPersonaService } from '../../services/ipersona.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-view.component.html',
  styleUrl: './persona-view.component.css'
})
export class PersonaViewComponent implements OnInit{

  oPersonasViews: Persona[] = [];

  constructor(public personaService : IPersonaService) {}

  ngOnInit(): void {
    this.oPersonasViews = this.personaService.getPersonas();
  }

}
