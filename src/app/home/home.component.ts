import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  displayedColumns: string[] = [
    'dealerName',
    'additionalinfo',
    'issueCategory',
    'issueStatus',
    'comments',
    'callStatus',
    'callDetails',
    'action'
  ];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}

export interface PeriodicElement {
  dealerName: string;
  additionalinfo: string;
  issueCategory: string;
  issueStatus: string;
  comments: string;
  callStatus: string;
  callDetails: string;
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    dealerName: 'Ritika Beniwal',
    additionalinfo: 'Lead',
    issueCategory: 'KYC',
    issueStatus: 'UnResolved',
    comments: 'Lorem Ipsum',
    callStatus: 'Rescheduled',
    callDetails: '20 Apr 2025',
  },
  {
    dealerName: 'Manpreet Singh',
    additionalinfo: 'Opportunity',
    issueCategory: 'e-Mandate',
    issueStatus: 'Resolved',
    comments: 'Lorem Ipsum',
    callStatus: 'Scheduled',
    callDetails: '20 Apr 2025',
  },
  {
    dealerName: 'Avika Sharma',
    additionalinfo: 'NACH',
    issueCategory: 'e-Mandate',
    issueStatus: 'Pending',
    comments: 'Lorem Ipsum',
    callStatus: 'Ended',
    callDetails: '20 Apr 2025',
  },
  {
    dealerName: 'Saurabh Kumar',
    additionalinfo: 'Contact ID',
    issueCategory: 'e-Mandate',
    issueStatus: 'Resolved',
    comments: 'Lorem Ipsum',
    callStatus: 'Ended',
    callDetails: '20 Apr 2025',
  },
  {
    dealerName: 'Hrithik Runak',
    additionalinfo: 'Payment ID',
    issueCategory: 'e-Mandate',
    issueStatus: 'Pending',
    comments: 'Lorem Ipsum',
    callStatus: 'Ended',
    callDetails: '20 Apr 2025',
  },
  {
    dealerName: 'Naman Jain',
    additionalinfo: 'Lead',
    issueCategory: 'e-Mandate',
    issueStatus: 'UnResolved',
    comments: 'Lorem Ipsum',
    callStatus: 'Cancelled',
    callDetails: '20 Apr 2025',
  },
];
