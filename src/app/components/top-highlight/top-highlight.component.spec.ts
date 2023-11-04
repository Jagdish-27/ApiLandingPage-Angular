import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHighlightComponent } from './top-highlight.component';

describe('TopHighlightComponent', () => {
  let component: TopHighlightComponent;
  let fixture: ComponentFixture<TopHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopHighlightComponent]
    });
    fixture = TestBed.createComponent(TopHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
