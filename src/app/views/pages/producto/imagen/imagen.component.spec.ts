import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  } from './imagen.component';

describe('imagenComponent', () => {
  let component: imagenComponent;
  let fixture: ComponentFixture<imagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ imagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(imagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
