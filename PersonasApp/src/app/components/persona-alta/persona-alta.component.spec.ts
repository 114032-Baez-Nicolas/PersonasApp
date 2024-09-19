import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaAltaComponent } from './persona-alta.component';

describe('PersonaAltaComponent', () => {
  let component: PersonaAltaComponent;
  let fixture: ComponentFixture<PersonaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
