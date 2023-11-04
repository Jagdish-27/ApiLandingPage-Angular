import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceStaticsComponent } from './advance-statics.component';

describe('AdvanceStaticsComponent', () => {
  let component: AdvanceStaticsComponent;
  let fixture: ComponentFixture<AdvanceStaticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceStaticsComponent]
    });
    fixture = TestBed.createComponent(AdvanceStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
