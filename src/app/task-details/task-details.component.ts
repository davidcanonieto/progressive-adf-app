import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  appName: string;
  taskId: string;
}
@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {

    appName: string = null;
    taskId: string = null;

    constructor(
      public dialogRef: MatDialogRef<TaskDetailsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    closeDialog(): void {
      this.dialogRef.close();
    }
}
