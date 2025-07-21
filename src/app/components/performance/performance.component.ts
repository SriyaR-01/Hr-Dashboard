import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { DataService, Employee } from 'src/app/service/data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export class PerformanceComponent implements OnInit {
  employees: Employee[] = [];
  performance: {
    [key: number]: {
      avgRating: number;
      attendance: number;
      projectsCompleted: number;
    };
  } = {};
  selectedEmployeeId: number | null = null;

  comboChartData: ChartData<'line'> = {
    labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: 'Training Score',
        data: [],
        borderColor: 'purple',
        fill: true,
        backgroundColor: 'rgba(128,0,128,0.2)',
        tension: 0.4,
      },
      {
        label: 'Project Completion %',
        data: [],
        borderColor: 'green',
        fill: true,
        backgroundColor: 'rgba(0,128,0,0.2)',
        tension: 0.4,
      },
    ],
  };

  comboChartOptions: ChartOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
  };

  salesChartData: ChartData<'line'> = {
    labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    datasets: [
      {
        label: 'Weekly Productivity',
        data: [],
        borderColor: 'purple',
        backgroundColor: 'transparent',
        tension: 0.3,
      },
    ],
  };

  barChartData: ChartData<'bar'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Completed',
        data: [],
        backgroundColor: 'limegreen',
      },
      {
        label: 'Pending',
        data: [],
        backgroundColor: 'crimson',
      },
    ],
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getEmployees().subscribe((data) => {
      this.employees = data;
      if (data.length) {
        this.selectedEmployeeId = data[0].id;
        this.loadPerformanceData();
      }
    });
  }

  public loadPerformanceData(): void {
    this.dataService.getPerformance().subscribe((perf) => {
      this.performance = perf;
      this.updateCharts();
    });
  }

  public onEmployeeChange(): void {
    this.updateCharts();
  }

  public updateCharts(): void {
    const id = this.selectedEmployeeId || 1;
    const perf = this.performance[id] || {
      avgRating: 3,
      attendance: 80,
      projectsCompleted: 10,
    };

    this.comboChartData = {
      ...this.comboChartData,
      datasets: [
        {
          ...this.comboChartData.datasets[0],
          data: Array.from({ length: 30 }, () =>
            Math.floor(perf.avgRating * 5 + Math.random() * 5)
          ),
        },
        {
          ...this.comboChartData.datasets[1],
          data: Array.from({ length: 30 }, () =>
            Math.floor(perf.projectsCompleted + Math.random() * 5)
          ),
        },
      ],
    };

    this.salesChartData = {
      ...this.salesChartData,
      datasets: [
        {
          ...this.salesChartData.datasets[0],
          data: Array.from({ length: 6 }, () =>
            Math.floor(perf.attendance / 10 + Math.random() * 2)
          ),
        },
      ],
    };

    this.barChartData = {
      ...this.barChartData,
      datasets: [
        {
          ...this.barChartData.datasets[0],
          data: [4, 5, 6, perf.projectsCompleted % 10],
        },
        {
          ...this.barChartData.datasets[1],
          data: [1, 2, 1, 3],
        },
      ],
    };
  }
}
