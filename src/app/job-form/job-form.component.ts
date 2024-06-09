import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobService } from '../job.service';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private jobService:JobService,private router: Router,private toastService:ToastService) {
    this.jobForm = this.fb.group({
      customerName: [''],
      jobType: [''],
      jobStatus: [''],
      appointmentDate: [''],
      technician: ['']
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.jobService.addJob(this.jobForm.value)
        .subscribe(
          response => {
            this.toastService.showSuccess('Success', 'Job added successfully')
          },
          error => {
            this.toastService.showError('Error', 'Unable to delete Job')
          }
        );
    }
    this.router.navigate(['/']);
  }
}
