import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService,MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JobFormComponent } from './job-form/job-form.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { JobEditComponent } from './job-edit/job-edit.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JobDescriptionComponent,
    NotFoundComponent,
    JobFormComponent,
    JobEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    DialogModule
    
  ],
  providers: [MessageService,ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
