import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVSeriesListComponent } from './tvseries-list.component';

describe('TVSeriesListComponent', () => {
  let component: TVSeriesListComponent;
  let fixture: ComponentFixture<TVSeriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVSeriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
