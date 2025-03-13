import { Component, inject } from '@angular/core';
import { JobItemComponent } from '../job-item/job-item.component';
import { AsyncPipe } from '@angular/common';
import { FavoriteJobsService } from '../../services/favorite-jobs.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    JobItemComponent,
    AsyncPipe
  ],
  templateUrl: './jobs-favorites.component.html',
  styleUrl: './jobs-favorites.component.css'
})
export class JobsFavoritesComponent {
  private readonly service = inject(FavoriteJobsService);

  protected jobs = this.service.getAllFavorites();
}
