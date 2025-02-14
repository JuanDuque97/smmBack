import { ComponentFixture, TestBed } from '@angular/core/testing';

import { subcategoriaComponent } from './subcategoria.component';

describe('subcategoriaComponent', () => {
  let component: subcategoriaComponent;
  let fixture: ComponentFixture<subcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ subcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(subcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
