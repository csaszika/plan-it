import { Component } from '@angular/core';
// @ts-ignore
import jsPDF from 'jspdf';

@Component({
    selector: 'pi-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    generatePdf(): void {
        const pdf = new jsPDF();
        const img = new Image();
        img.src = 'assets/kelen-logo.jpg';

        // tslint:disable-next-line:no-magic-numbers
        pdf.addImage(img, 'JPEG', 170, 15, 20, 26);

        pdf.save('x.pdf');
    }
}
