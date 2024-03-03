import { Component } from '@angular/core';

@Component({
  selector: 'app-report-summary',
  templateUrl: './report-summary.component.html',
  styleUrls: ['./report-summary.component.scss']
})
export class ReportSummaryComponent {
  counter: any[] = [];
  class: string = "";
  rows: string = ``;

  reportInformation: any[] = [
    "Rotaciones de mesas evaludas",
    39,
    "Mesas ubicadas por el host",
    39,
    "Promedio de espera para primera atención",
    "00:00:28",
    "Mesas con demoras superior a 3 minutos para ser atendidas",
    0,
    "Cantidad de procesos evaluados",
    38,
    "Promedio para recibir plato fuerte una vez tomada la orden", 
    "00:10:43",
    "Toques de gerente Eliezer",
    "Primeros toques",
    "N/A",
    "Otros toques",
    "N/A",
    "Toques de gerente Andrea",
    "Primeros toques",
    "N/A",
    "Otros toques",
    "N/A",
    "Toques de gerente Emily",
    "Primeros toques",
    "38",
    "Otros toques",
    "28",
    "Toques de gerente Leonardo Hernandez",
    "Primeros toques",
    "N/A",
    "Otros toques",
    "N/A",
    "Toques de gerente Alix Cabrera",
    "Primeros toques",
    "N/A",
    "Otros toques",
    "N/A",
    "Promedio de toques de mesa por los mesoneros",
    "Cantidad",
    "Tiempo",
    "00:00:21",
    "Mesas con demoras superior a 4 minutos para ser limpiadas",
    "0",
    "Promedio de tiempo para limpiar mesas después de ser desocupadas por clientes",
    "0:01:10",
    "Uso de celular",
    "1"


  ] 

  ngOnInit() {

    for(let i = 1; i <= 48; i++) {
      this.class = `grid-item-${i}`;
      if(i === 13 ) {
        this.rows += "2fr ";
      } else {
        this.rows += "1fr ";
      }
      this.counter.push({'number': i,'class': this.class});
      //this.counter.push(i);
      console.log(this.rows);
    }
   
  }

}
