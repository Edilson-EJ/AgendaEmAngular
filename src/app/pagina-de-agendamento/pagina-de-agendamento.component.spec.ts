import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeAgendamentoComponent } from './pagina-de-agendamento.component';

describe('PaginaDeAgendamentoComponent', () => {
  let component: PaginaDeAgendamentoComponent;
  let fixture: ComponentFixture<PaginaDeAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDeAgendamentoComponent]
    });
    fixture = TestBed.createComponent(PaginaDeAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
