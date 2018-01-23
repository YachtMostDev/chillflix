import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListItemTagComponent } from './film-list-item-tag.component';

describe('FilmListItemTagComponent', () => {
  let component: FilmListItemTagComponent;
  let fixture: ComponentFixture<FilmListItemTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmListItemTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListItemTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
