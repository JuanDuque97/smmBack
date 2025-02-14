import { ComponentFixture, TestBed } from '@angular/core/testing';

import { permisoComponent } from './permiso.component';

describe('permisoComponent', () => {
  let component: permisoComponent;
  let fixture: ComponentFixture<permisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ permisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(permisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
