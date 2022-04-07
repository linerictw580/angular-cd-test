import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBaseComponent } from './node-base.component';

describe('NodeBaseComponent', () => {
  let component: NodeBaseComponent;
  let fixture: ComponentFixture<NodeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NodeBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
