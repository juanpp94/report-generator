import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AddReportComponent } from './components/add-report/add-report.component';
import { ReportService } from 'src/app/services/report.service';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ReportSummaryComponent } from './components/report-summary/report-summary.component';


@NgModule({
  declarations: [
    AddReportComponent,
    FrontPageComponent,
    ReportSummaryComponent
  ],
  providers: [
    ReportService
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
