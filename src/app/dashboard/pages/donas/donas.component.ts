import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficaService } from '../../services/grafica.service';
import {delay} from 'rxjs/operators'

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styles: [
  ]
})
export class DonasComponent implements OnInit {

  constructor(private serviceSocialMedia: GraficaService) { }

  ngOnInit(): void {
  
    this.serviceSocialMedia.getUserSocialMedia().subscribe(data => {
     console.log(data);

     const labels = Object.keys(data);
     const values = Object.values(data);
     this.doughnutChartLabels = labels;
     this.doughnutChartData.push(values);
    });


  }

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100]
  ];

  public colors: Color[] = [
    {
      backgroundColor: [
        '#2B4357',
        '#B1C9DD',
        '#6AA6D6',
        '#454F57',
        '#527EA3',
      ]
    }
  ]


  public doughnutChartType: ChartType = 'doughnut';

}
