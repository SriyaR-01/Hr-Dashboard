import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Jobs } from 'src/app/service/data.service';

@Component({
  selector: 'app-all-job-openings',
  templateUrl: './all-job-openings.component.html',
  styleUrls: ['./all-job-openings.component.scss'],
})
export class AllJobOpeningsComponent implements OnInit {
  jobs: Jobs[] = [];
  filteredJobs: Jobs[] = [];
  departments: string[] = [];
  locations: string[] = [];
  selectedDept: string = '';
  selectedLoc: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getJobOpenings().subscribe((data) => {
      this.jobs = data;
      this.filteredJobs = data;
      this.departments = [...new Set(data.map((j) => j.department))];
      this.locations = [...new Set(data.map((j) => j.location))];
    });
  }

  public applyFilters(): void {
    this.filteredJobs = this.jobs.filter((job) => {
      return (
        (!this.selectedDept || job.department === this.selectedDept) &&
        (!this.selectedLoc || job.location === this.selectedLoc)
      );
    });
  }

  public clearFilters(): void {
    this.selectedDept = '';
    this.selectedLoc = '';
    this.filteredJobs = this.jobs;
  }

  public viewDetails(id: number): void {
    this.router.navigate(['/job-openings', id]);
  }
}
