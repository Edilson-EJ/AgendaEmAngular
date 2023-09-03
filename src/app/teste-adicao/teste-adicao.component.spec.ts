import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteAdicaoComponent } from './teste-adicao.component';

describe('TesteAdicaoComponent', () => {
  let component: TesteAdicaoComponent;
  let fixture: ComponentFixture<TesteAdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteAdicaoComponent]
    });
    fixture = TestBed.createComponent(TesteAdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
