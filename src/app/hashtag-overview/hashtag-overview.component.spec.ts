import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagOverviewComponent } from './hashtag-overview.component';

describe('HashtagOverviewComponent', () => {
  let component: HashtagOverviewComponent;
  let fixture: ComponentFixture<HashtagOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
