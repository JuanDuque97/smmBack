import { ComponentFixture, TestBed } from '@angular/core/testing';

import { rolPermisoComponent } from './rolPermiso.component';

describe('rolPermisoComponent', () => {
  let component: rolPermisoComponent;
  let fixture: ComponentFixture<rolPermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ rolPermisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(rolPermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
