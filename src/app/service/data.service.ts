import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  public getPerformanceRawData(): Observable<{
    labels: string[];
    values: number[];
  }> {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((data) => {
          const top10 = data.slice(0, 10);
          return {
            labels: top10.map((post) => `Post ${post.id}`),
            values: top10.map((post) => post.title.length),
          };
        })
      );
  }
}
