import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { jobType } from '../model/jobType';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {
  jobForm: FormGroup | any;
  jobId: number | any;
  display: boolean|any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private jobService: JobService,private confirmationService:ConfirmationService,private toastService:ToastService) {
    this.jobForm = this.fb.group({
      customerName: ['', Validators.required],
      jobType: ['', Validators.required],
      jobStatus: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      technician: ['', Validators.required]
    });
  }
  ngOnInit(): void {

    this.jobId = this.route.snapshot.paramMap.get('id');
    this.jobService.getJobById(this.jobId).subscribe(
      (job: jobType) => { this.jobForm.patchValue(job)
       },
      (error: any) => { console.error('Error fetching job', error) }
    );
  }

  confirmUpdate(): void {
    this.confirmationService.confirm({
        header: 'Confirmation',
        message: 'Are you sure you want to update the job details?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.updateJob();
        }
    });
  }
  updateJob() {
    this.jobService.updateJob(this.jobId, this.jobForm.value).subscribe((result: any) => {
      this.toastService.showSuccess('Success', 'Job updated successfully');
     this.router.navigate(['/']);
    });
  }
}