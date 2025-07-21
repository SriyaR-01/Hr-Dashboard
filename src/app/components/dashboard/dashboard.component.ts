import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  summaryStats = [
    { title: 'Total Employees', value: 20 },
    { title: 'Open Positions', value: 12 },
    { title: 'New Hires', value: 8 },
  ];

  growthChartData: ChartData<'bar'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'New Hires',
        data: [9, 6, 8, 9, 7, 10, 9, 9, 8, 10, 9, 10],
        backgroundColor: '#ec407a',
      },
      {
        label: 'Departures',
        data: [6, 5, 4, 5, 4, 5, 6, 4, 5, 5, 4, 6],
        backgroundColor: '#42a5f5',
      },
    ],
  };

  costPieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Payroll', 'Benefits', 'Training', 'Overhead'],
    datasets: [
      {
        data: [55, 20, 15, 10],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'],
        hoverBackgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'], // <- same as backgroundColor
      },
    ],
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  employeeLineChartData: ChartData<'line'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Employees',
        data: [210, 195, 220, 215, 225, 215, 230, 225, 223, 230, 212, 218],
        borderColor: '#ab47bc',
        backgroundColor: 'rgba(171,71,188,0.2)',
        fill: true,
      },
    ],
  };

  lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  heatmapQuarters = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'];
  heatmapData = [
    { name: 'HR', scores: [3, 4, 4, 5] },
    { name: 'Marketing', scores: [2, 3, 4, 3] },
    { name: 'Engineering', scores: [3, 3, 4, 4] },
    { name: 'Finance', scores: [4, 4, 3, 5] },
    { name: 'Sales', scores: [3, 2, 3, 4] },
  ];

  constructor(private router: Router) {}

  public getHeatColor(score: number): string {
    const colors = ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#756bb1'];
    return colors[score - 1];
  }

  public navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  ngOnInit(): void {}
}
