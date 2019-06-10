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
            yValueFormatString: "R$ #,###",
            legendMarkerColor: "grey",
            legendText: "Produto",
            dataPoints: dadosGrafico
          }
        ]
      });
      chart.render();
    });
  }
}
