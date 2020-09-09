import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEquiposComponent } from './editar-equipos.component';

describe('EditarEquiposComponent', () => {
  let component: EditarEquiposComponent;
  let fixture: ComponentFixture<EditarEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
