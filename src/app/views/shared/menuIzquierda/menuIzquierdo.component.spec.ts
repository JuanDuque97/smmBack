import { ComponentFixture, TestBed } from '@angular/core/testing';

import { menuIzquierdoComponent } from './menuIzquierdo.component';

describe('menuIzquierdoComponent', () => {
  let component: menuIzquierdoComponent;
  let fixture: ComponentFixture<menuIzquierdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ menuIzquierdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(menuIzquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
