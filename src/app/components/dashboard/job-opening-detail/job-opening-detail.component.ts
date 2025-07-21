import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-job-opening-detail',
  templateUrl: './job-opening-detail.component.html',
  styleUrls: ['./job-opening-detail.component.scss'],
})
export class JobOpeningDetailComponent implements OnInit {
  job: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const jobId = this.activateRoute.snapshot.paramMap.get('id');
    this.dataService.getJobOpenings().subscribe((jobs) => {
      this.job = jobs.find((j) => j.id.toString() === jobId);
    });
  }

  public goBack(): void {
    this.router.navigate(['/job-openings']);
  }
}
