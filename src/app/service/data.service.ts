import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: {
    name: string;
    bs: string;
  };
  department?: string;
  hireDate?: string;
}

export interface Performance {
  avgRating: number;
  attendance: number;
  projectsCompleted: number;
}
export interface PerformanceData {
  avgRating: number;
  attendance: number;
  projectsCompleted: number;
}

export interface Jobs {
  id: number;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  description: string;
  postedDate: string;
  skills: string[];
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('assets/data/employee.json');
  }

  public getPerformance(): Observable<{ [key: number]: PerformanceData }> {
    return this.http.get<{ [key: number]: PerformanceData }>(
      'assets/data/performance.json'
    );
  }

  public getJobOpenings(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>('assets/data/job-opening.json');
  }

  public getJobById(id: number): Observable<any> {
    return this.getJobOpenings().pipe(
      map((jobs) => jobs.find((job) => job.id === id))
    );
  }
}
