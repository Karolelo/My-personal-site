import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollablePhotoGallery } from './scrollable-photo-gallery';

describe('ScrollablePhotoGallery', () => {
  let component: ScrollablePhotoGallery;
  let fixture: ComponentFixture<ScrollablePhotoGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollablePhotoGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollablePhotoGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
