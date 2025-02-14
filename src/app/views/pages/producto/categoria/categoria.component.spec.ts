import { ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriaComponent } from './categoria.component';

describe('categoriaComponent', () => {
  let component: categoriaComponent;
  let fixture: ComponentFixture<categoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ categoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(categoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
