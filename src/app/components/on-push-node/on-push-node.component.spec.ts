import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushNodeComponent } from './on-push-node.component';

describe('OnPushNodeComponent', () => {
  let component: OnPushNodeComponent;
  let fixture: ComponentFixture<OnPushNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnPushNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
