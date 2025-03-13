import { Component, inject } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  private readonly service = inject(JobsService);
  private readonly route = inject(ActivatedRoute);

  protected readonly job = this.route.params.pipe(switchMap(params => this.service.getJob(params['id'])));
}
