import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosFeitosComponent } from './agendamentos-feitos.component';

describe('AgendamentosFeitosComponent', () => {
  let component: AgendamentosFeitosComponent;
  let fixture: ComponentFixture<AgendamentosFeitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentosFeitosComponent]
    });
    fixture = TestBed.createComponent(AgendamentosFeitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
