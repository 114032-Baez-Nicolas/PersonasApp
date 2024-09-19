import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaViewComponent } from "./components/persona-view/persona-view.component";
import { PersonaAltaComponent } from "./components/persona-alta/persona-alta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonaViewComponent, PersonaAltaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PersonasApp';
}
