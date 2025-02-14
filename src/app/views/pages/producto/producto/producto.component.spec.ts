import { ComponentFixture, TestBed } from '@angular/core/testing';

import { productoComponent } from './producto.component';

describe('productoComponent', () => {
  let component: productoComponent;
  let fixture: ComponentFixture<productoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ productoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(productoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
