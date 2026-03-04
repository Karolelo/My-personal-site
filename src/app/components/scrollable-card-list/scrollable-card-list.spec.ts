import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableCardList } from './scrollable-card-list';

describe('ScrollableCardList', () => {
  let component: ScrollableCardList;
  let fixture: ComponentFixture<ScrollableCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableCardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableCardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
