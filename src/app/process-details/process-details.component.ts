import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  appName: string;
  processId: string;
}

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss']
})
export class ProcessDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<ProcessDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
