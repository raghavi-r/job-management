import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient,private messageService:MessageService ) { }

   private URL = 'http://localhost:3000/jobs';

   public getAllJobs() : Observable<any>{
    return this.http.get<any>(this.URL);
   }

   public getJobById(id: number): Observable<any> {
    const url = `${this.URL}/${id}`;
    return this.http.get<any>(url);
  }

  public addJob(job: any): Observable<any> {
    const url = `${this.URL}`;
    return this.http.post(url,job);
  }

  public updateJob(id: number, job: any): Observable<any> {
    const url = `${this.URL}/${id}`;
    return this.http.put(url, job);
  }

  public deleteJob(id: number): Observable<any> {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url);
  }
}
