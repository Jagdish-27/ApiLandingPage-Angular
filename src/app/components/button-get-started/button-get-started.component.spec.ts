import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGetStartedComponent } from './button-get-started.component';

describe('ButtonGetStartedComponent', () => {
  let component: ButtonGetStartedComponent;
  let fixture: ComponentFixture<ButtonGetStartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGetStartedComponent]
    });
    fixture = TestBed.createComponent(ButtonGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
