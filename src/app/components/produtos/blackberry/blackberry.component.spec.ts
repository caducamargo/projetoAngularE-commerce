import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackberryComponent } from './blackberry.component';

describe('BlackberryComponent', () => {
  let component: BlackberryComponent;
  let fixture: ComponentFixture<BlackberryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackberryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackberryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
