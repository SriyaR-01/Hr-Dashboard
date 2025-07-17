import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { DataService} from 'src/app/service/data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'title', 'employeeId', 'summary', 'notes', 'status'];
  public chartLabels: string[] = [];
  public chartData: any[] = [];
  public chartType: ChartType = 'line';
  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPerformanceRawData().subscribe(res => {
      this.chartLabels = res.labels;
      this.chartData = [
        {
          label: 'Title Length',
          data: res.values,
          borderColor: '#3f51b5',
          backgroundColor: 'rgba(63,81,181,0.3)',
          fill: true,
          tension: 0.4
        }
      ];
    });
  }

}
