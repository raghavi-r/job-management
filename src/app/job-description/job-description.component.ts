import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { jobType } from '../model/jobType';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent {
  public job: jobType | any;
  jobId: any;
  constructor(private route: ActivatedRoute, private router: Router, private jobService: JobService,private confirmationService:ConfirmationService,private toastService:ToastService) { }

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id');
    this.jobService.getJobById(this.jobId).subscribe((result: jobType) => {
      this.job = result;
    });
  }
  confirmUpdate(): void {
    this.confirmationService.confirm({
        header: 'Confirmation',
        message: 'Are you sure you want to delete the job ?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.deleteJob();
        }
    });
  }
  public deleteJob(): any {
    this.jobService.deleteJob(this.jobId).subscribe((result: jobType) => {
      this.job = result;
      this.toastService.showSuccess('Success', 'Job deleted successfully')

    });
    this.router.navigate(['/']);
  }
  public onRowClick(id: any) {
    this.router.navigate(['/edit', id]);
  }
}