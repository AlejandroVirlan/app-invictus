import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsociosComponent } from './formsocios.component';

describe('FormsociosComponent', () => {
  let component: FormsociosComponent;
  let fixture: ComponentFixture<FormsociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
