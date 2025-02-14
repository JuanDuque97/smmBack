import { ComponentFixture, TestBed } from '@angular/core/testing';

import { medioEnvioComponent } from './medioEnvio.component';

describe('medioEnvioComponent', () => {
  let component: medioEnvioComponent;
  let fixture: ComponentFixture<medioEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ medioEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(medioEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
