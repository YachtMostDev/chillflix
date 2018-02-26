import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsContainerComponent } from './thumbs-container.component';

describe('ThumbsContainerComponent', () => {
  let component: ThumbsContainerComponent;
  let fixture: ComponentFixture<ThumbsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
