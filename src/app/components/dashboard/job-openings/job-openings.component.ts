import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss'],
})
export class JobOpeningsComponent implements OnInit {
  jobs: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getJobOpenings().subscribe((data) => {
      console.log(data);
      this.jobs = data.slice(0, 5);
    });
  }

  public viewAll(): void {
    this.router.navigate(['/job-openings/all']);
  }

  public viewJobDetail(id: number): void {
    this.router.navigate(['/jobs', id]);
  }
}
