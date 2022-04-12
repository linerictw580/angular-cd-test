import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushDemoComponent } from './on-push-demo.component';

describe('OnpushComponent', () => {
  let component: OnPushDemoComponent;
  let fixture: ComponentFixture<OnPushDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnPushDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
