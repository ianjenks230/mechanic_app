import { jsPDF } from 'jspdf';
import { appConfig } from '../config';
import { Request } from '../types';
import { formatCurrency, formatDate } from './format';

export function downloadInvoicePdf(request: Request) {
  const doc = new jsPDF();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(`${appConfig.appName} Invoice`, 20, 20);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Request ID: ${request.id}`, 20, 34);
  doc.text(`Mechanic: ${request.mechanicName}`, 20, 42);
  doc.text(`Created: ${formatDate(request.createdAt)}`, 20, 50);
  doc.text(`Vehicle: ${request.vehicleType}`, 20, 58);
  doc.text(`Address: ${request.address}`, 20, 66);

  let y = 78;
  doc.setFont('helvetica', 'bold');
  doc.text('Line items', 20, y);
  y += 8;
  doc.setFont('helvetica', 'normal');

  request.lineItems.forEach((item) => {
    doc.text(item.description, 20, y);
    doc.text(formatCurrency(item.amount), 190, y, { align: 'right' });
    y += 8;
  });

  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.text('Total', 20, y);
  doc.text(formatCurrency(request.total), 190, y, { align: 'right' });

  y += 16;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Pay mechanic directly. No in-app payments.', 20, y);

  doc.save(`invoice-${request.id}.pdf`);
}
