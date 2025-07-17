import { Component, Input, OnInit } from '@angular/core';
import { DataService, Employee } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  @Input() dashboardView = false;
  public employees: Employee[] = [];
  public filteredEmployees: Employee[] = [];
  public displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'company',
  ];
  public searchValue: string = '';
  public loading: boolean = true;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.DataService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = [...this.employees];
      this.loading = false;
    });
  }

  public applyFilter(event: any): void {
    this.searchValue = event.target.value.toLowerCase();

    this.filteredEmployees = this.employees.filter((emp) =>
      Object.values(emp)
        .map((val) => (typeof val === 'object' ? Object.values(val) : [val]))
        .some((value) =>
          value?.toString().toLowerCase().includes(this.searchValue)
        )
    );
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.filteredEmployees = [...this.employees];
  }
}
