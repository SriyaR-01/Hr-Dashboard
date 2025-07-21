import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobOpeningsComponent } from './all-job-openings.component';

describe('AllJobOpeningsComponent', () => {
  let component: AllJobOpeningsComponent;
  let fixture: ComponentFixture<AllJobOpeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllJobOpeningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJobOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
