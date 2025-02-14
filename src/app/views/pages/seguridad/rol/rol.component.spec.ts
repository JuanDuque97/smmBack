import { ComponentFixture, TestBed } from '@angular/core/testing';

import { rolComponent } from './rol.component';

describe('rolComponent', () => {
  let component: rolComponent;
  let fixture: ComponentFixture<rolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ rolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(rolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
