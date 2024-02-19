import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReportComponent } from './components/add-report/add-report.component';

const routes: Routes = [
  {
    path: 'show',
    component: AddReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
