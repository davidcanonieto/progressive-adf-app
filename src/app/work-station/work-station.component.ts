import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-work-station',
    templateUrl: './work-station.component.html',
    styleUrls: ['./work-station.component.scss']
})
export class WorkStationComponent implements OnInit {

    appName: string = null;

    constructor(private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const applicationName = params['appName'];
            if (applicationName) {
                this.appName = params['appName'];
            }
        });
    }



}
