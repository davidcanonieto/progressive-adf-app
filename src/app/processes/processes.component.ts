import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcessDetailsComponent } from '../process-details/process-details.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent implements OnInit {

  appName: string = null;
  processId: string = null;
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

  onRowClick(processId: string) {
    if (processId) {
      this.processId = processId;
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProcessDetailsComponent, {
      width: '600px',
      data: {appName: this.appName, processId: this.processId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
