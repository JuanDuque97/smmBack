import { ComponentFixture, TestBed } from '@angular/core/testing';

import { envioComponent } from './envio.component';

describe('envioComponent', () => {
  let component: envioComponent;
  let fixture: ComponentFixture<envioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ envioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(envioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
