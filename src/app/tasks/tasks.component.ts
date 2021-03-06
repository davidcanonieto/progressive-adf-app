import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  appName: string = null;
  taskId: string;
  supportedSizes = [5, 10, 15, 20];

  constructor(private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const applicationName = params['appName'];
      if (applicationName) {
        this.appName = params['appName'];
      }
    });
  }

  onRowClick(taskId: string) {
    if (taskId) {
      this.taskId = taskId;
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      width: '600px',
      data: {appName: this.appName, taskId: this.taskId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
