import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOutButtonComponent } from './ng-out-button.component';

describe('NgOutButtonComponent', () => {
  let component: NgOutButtonComponent;
  let fixture: ComponentFixture<NgOutButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgOutButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
