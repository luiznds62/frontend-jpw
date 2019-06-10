import { Component, OnInit } from "@angular/core";
import * as CanvasJS from "../../canvasjs.min";
import { VendaService } from "src/app/services/venda.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private vendaService: VendaService) {}

  ngOnInit() {
    this.vendaService.listarVenda().subscribe((response: any) => {
      var dadosGrafico = [];
      var dadosVenda = response.object;
      dadosVenda.forEach(element => {
        dadosGrafico.push({
          y: Number(element.valorTotal),
          label: element.produto[0].nome
        });
      });
      console.log(dadosGrafico);

      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
          text: "Vendas por produto"
        },
        axisY: {
          title: "R$"
        },
        data: [
          {
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "Produto",
            dataPoints: dadosGrafico
            // dataPoints: [      
            //   { y: 300878, label: "Venezuela" },
            //   { y: 266455,  label: "Saudi" },
            //   { y: 169709,  label: "Canada" },
            //   { y: 158400,  label: "Iran" },
            //   { y: 142503,  label: "Iraq" },
            //   { y: 101500, label: "Kuwait" },
            //   { y: 97800,  label: "UAE" },
            //   { y: 80000,  label: "Russia" }
            // ]
          }
        ]
      });
      chart.render();
    });
  }
}
