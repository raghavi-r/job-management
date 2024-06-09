import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path: 'jobs/:id',component:JobDescriptionComponent},
  {path:'form',component:JobFormComponent},
  {path:'edit/:id',component:JobEditComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
