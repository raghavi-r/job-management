import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';
import { jobType } from '../model/jobType';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public jobs: jobType[] = [];

    constructor(private route: Router, private jobService: JobService) {
    }
    ngOnInit(): void {
        this.jobService.getAllJobs().subscribe((result: any) => {
            this.jobs = result;
        })
    }
    onRowClick(id: any) {
        this.route.navigate(['/jobs', id]);
    }
}
