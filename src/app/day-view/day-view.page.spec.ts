import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayViewPage } from './day-view.page';

describe('DayViewPage', () => {
  let component: DayViewPage;
  let fixture: ComponentFixture<DayViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DayViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
