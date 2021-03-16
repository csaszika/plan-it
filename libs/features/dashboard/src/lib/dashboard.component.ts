import { ChangeDetectionStrategy, Component } from '@angular/core';
// import jsPDF from 'jspdf';

@Component({
    selector: 'pi-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
    generatePdf(): void {
        // const pdf = new jsPDF();
        // const img = new Image();
        // img.src = 'assets/kelen-logo.jpg';
        //
        // pdf.addImage(img, 'JPEG', 170, 15, 20, 26);
        //
        // pdf.save('x.pdf');
    }
}
