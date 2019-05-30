import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVendasComponent } from './cadastro-vendas.component';

describe('CadastroVendasComponent', () => {
  let component: CadastroVendasComponent;
  let fixture: ComponentFixture<CadastroVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
