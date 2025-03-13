import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobDto } from '../model/jobDto';
import { JobDetailsDto } from '../model/jobDetailsDto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private readonly client = inject(HttpClient);

  private readonly ENDPOINT = 'jobs';

  public getAll(): Observable<JobDto[]> {
    return this.client.get<JobDto[]>(environment.apiUrl+this.ENDPOINT);
  }

  public getJob(id: number): Observable<JobDetailsDto> {
    return this.client.get<JobDetailsDto>(`${environment.apiUrl+this.ENDPOINT}/${id}`);
  }
}
