import { Injectable } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  showLoader: boolean = false;

  constructor() { }

  async generatePdf() {
    //this.showLoader = true;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pages = document.querySelectorAll('.page');

    for (const [index, page] of Array.from(pages).entries()) {
      const canvas = await html2canvas(page as HTMLElement, { scale: 3 });

      const paddingTop = 800;
      const paddingRight = 200;
      const paddingBottom = 1000;
      const paddingLeft = 200;

      const canvasWidth = canvas.width + paddingLeft + paddingRight;
      const canvasHeight = canvas.height + paddingTop + paddingBottom;

      const newCanvas = document.createElement('canvas');
      newCanvas.width = canvasWidth;
      newCanvas.height = canvasHeight;
      const ctx = newCanvas.getContext('2d');

      if (ctx) {
        ctx.fillStyle = '#ffffff'; // Background color
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(canvas, paddingLeft, paddingTop);
      }

      const imgData = newCanvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      if (index < pages.length - 1) {
        pdf.addPage();
        
      }
    }

    pdf.save('content.pdf');
    //this.showLoader = false;
  }
}
