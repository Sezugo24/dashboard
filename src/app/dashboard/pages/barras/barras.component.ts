import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  
  public barChartData: ChartDataSets[] = [
    { data: [30, 35, 20, 50, 60, 75], label: 'Xbox', backgroundColor: '#3FEB5F', hoverBackgroundColor: '#3BD678' },
    { data: [60, 44, 60, 65, 80, 85], label: 'Play Station',  backgroundColor: '#42B2F6', hoverBackgroundColor: '#397AD4'  },
    { data: [40, 55, 55, 60, 75, 70], label: 'Nintento', backgroundColor: '#EB5244', hoverBackgroundColor: '#B84036'  }
  ];

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [Math.round(Math.random() * 100),85,85,80,75,80];
    this.barChartData[1].data = [90,85,85,90,Math.round(Math.random() * 100),90];
    this.barChartData[2].data = [85,Math.round(Math.random() * 100),80,80,85,80];

    this.barChartLabels[0]= '2021';
    this.barChartLabels[1]= '2022';
    this.barChartLabels[2]= '2023';
    this.barChartLabels[3]= '2024';
    this.barChartLabels[4]= '2025';
    this.barChartLabels[5]= '2026';
  }

  public randomize2(): void {
    // Only Change 3 values
    this.barChartData[0].data = [30, 35, 20, 50, 60, 75];
    this.barChartData[1].data = [60, 44, 60, 65, 80, 85];
    this.barChartData[2].data = [40, 55, 55, 60, 75, 70];

    this.barChartLabels[0]= '2015';
    this.barChartLabels[1]= '2016';
    this.barChartLabels[2]= '2017';
    this.barChartLabels[3]= '2018';
    this.barChartLabels[4]= '2019';
    this.barChartLabels[5]= '2020';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
