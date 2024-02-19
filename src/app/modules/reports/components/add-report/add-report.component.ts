import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent {


  constructor(public _reportService: ReportService) {}

  downloadPdf() {
    this._reportService.generatePdf();
  }

}
