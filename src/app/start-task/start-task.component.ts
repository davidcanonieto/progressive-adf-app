import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-task',
  templateUrl: './start-task.component.html',
  styleUrls: ['./start-task.component.scss']
})
export class StartTaskComponent implements OnInit {

  appName: string = null;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.appName) {
          this.appName = params.appName;
      } else {
        this.router.navigate(['/apps']);
      }
    });
  }

  onTaskStarted(task: any) {
    this.router.navigate(['/apps', this.appName, 'work-station']);
  }

  onCancelStartTask() {
    this.router.navigate(['/apps', this.appName, 'work-station']);
  }

}
