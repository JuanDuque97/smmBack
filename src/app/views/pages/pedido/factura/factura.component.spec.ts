import { ComponentFixture, TestBed } from '@angular/core/testing';

import { facturaComponent } from './factura.component';

describe('facturaComponent', () => {
  let component: facturaComponent;
  let fixture: ComponentFixture<facturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ facturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(facturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
