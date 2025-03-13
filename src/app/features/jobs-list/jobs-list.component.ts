import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { JobItemComponent } from '../job-item/job-item.component';
import { Job } from '../../model/job';
import { FavoriteJobsService } from '../../services/favorite-jobs.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    AsyncPipe,
    JobItemComponent
  ],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent {
  private readonly service = inject(FavoriteJobsService);

  protected readonly jobs = this.service.getAll();

  protected onFavorite(job: Job): void {
    this.service.toggleFavorite(job);
  }
}
