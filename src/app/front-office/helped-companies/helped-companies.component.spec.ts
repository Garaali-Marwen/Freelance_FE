import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpedCompaniesComponent } from './helped-companies.component';

describe('HelpedCompaniesComponent', () => {
  let component: HelpedCompaniesComponent;
  let fixture: ComponentFixture<HelpedCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpedCompaniesComponent]
    });
    fixture = TestBed.createComponent(HelpedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
