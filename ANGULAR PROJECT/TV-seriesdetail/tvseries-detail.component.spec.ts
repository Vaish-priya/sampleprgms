import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesDetailComponent } from './tvseries-detail.component';

describe('TvseriesDetailComponent', () => {
  let component: TvseriesDetailComponent;
  let fixture: ComponentFixture<TvseriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvseriesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
