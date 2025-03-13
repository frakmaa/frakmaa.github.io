import { Routes } from '@angular/router';
import { JobsListComponent } from './features/jobs-list/jobs-list.component';
import { JobsFavoritesComponent } from './features/jobs-favorites/jobs-favorites.component';
import { JobDetailsComponent } from './features/job-details/job-details.component';

export const routes: Routes = [
  {path: 'favorites', component: JobsFavoritesComponent},
  {
    path: 'jobs', children: [
      {path: '', component: JobsListComponent},
      {path: ':id', component: JobDetailsComponent},
    ]
  },
  {path: '', redirectTo: 'jobs', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];
