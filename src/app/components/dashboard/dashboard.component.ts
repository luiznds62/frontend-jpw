import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../canvasjs.min';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let dataPoints = [
      { y: 71 },
      { y: 55 },
      { y: 50 },
      { y: 65 },
      { y: 95 },
      { y: 68 },
      { y: 28 },
      { y: 34 },
      { y: 14 }
    ];

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Basic Column Chart in Angular 5"
      },
      data: [{
        type: "column",
        dataPoints: dataPoints
      }]
    });
    chart.render();
  }
}

