import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthViewPage } from './month-view.page';

describe('MonthViewPage', () => {
  let component: MonthViewPage;
  let fixture: ComponentFixture<MonthViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonthViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
