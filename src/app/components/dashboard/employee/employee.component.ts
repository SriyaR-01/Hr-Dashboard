import { Component, Input, OnInit } from '@angular/core';
import { DataService, Employee } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  @Input() dashboardView: boolean = false;
  public employees: Employee[] = [];
  public filteredEmployees: Employee[] = [];
  public searchValue: string = '';
  public loading: boolean = true;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService.getEmployees().subscribe((data: Employee[]): void => {
      this.employees = data;
      this.filteredEmployees = [...this.employees];
      this.loading = false;
    });
  }

  public applyFilter(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((emp: Employee) =>
      JSON.stringify(emp).toLowerCase().includes(this.searchValue)
    );
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.filteredEmployees = [...this.employees];
  }
}
