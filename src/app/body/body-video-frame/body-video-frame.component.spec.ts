import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVideoFrameComponent } from './body-video-frame.component';

describe('BodyVideoFrameComponent', () => {
  let component: BodyVideoFrameComponent;
  let fixture: ComponentFixture<BodyVideoFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyVideoFrameComponent]
    });
    fixture = TestBed.createComponent(BodyVideoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
