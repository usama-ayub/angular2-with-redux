import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  doughnutChart: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    var ctx = document.getElementById("myChart");
    this.doughnutChart = new Chart(ctx, {
      type: 'doughnut', 
      data: {
        labels: ['100', '200', '750', '1500'],
        datasets: [{
          data: [2, 4, 5, 1],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384"
          ]
        }]
      }
    });
  }

}
