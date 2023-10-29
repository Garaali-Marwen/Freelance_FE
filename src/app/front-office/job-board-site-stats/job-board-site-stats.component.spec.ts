import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoardSiteStatsComponent } from './job-board-site-stats.component';

describe('JobBoardSiteStatsComponent', () => {
  let component: JobBoardSiteStatsComponent;
  let fixture: ComponentFixture<JobBoardSiteStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobBoardSiteStatsComponent]
    });
    fixture = TestBed.createComponent(JobBoardSiteStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
