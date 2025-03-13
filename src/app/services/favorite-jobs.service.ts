import { computed, effect, inject, Injectable, Signal, signal } from '@angular/core';
import { Job } from '../model/job';
import { JobsService } from './jobs.service';
import { Observable, shareReplay } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteJobsService {
  private readonly jobsService = inject(JobsService);
  private readonly storageService = inject(StorageService);

  private readonly KEY_STORAGE = 'favoriteJobs';
  private readonly favoritesJobsId = signal(this.storageService.get<number[]>(this.KEY_STORAGE) ?? []);

  private readonly _jobs = toSignal(this.jobsService.getAll(), {initialValue: []});

  private readonly jobs: Signal<Job[]> = computed(() => this._jobs().map(j => ({
    ...j,
    favorite: this.favoritesJobsId().includes(j.id)
  })));

  private readonly favoriteJobs: Signal<Job[]> = computed(() => this._jobs().filter(j => this.favoritesJobsId().includes(j.id)).map(j => ({
    ...j,
    favorite: true
  })));

  constructor() {
    effect(() => {
      this.storageService.set(this.KEY_STORAGE, this.favoritesJobsId());
    });
  }

  public getAll(): Observable<Job[]> {
    return toObservable(this.jobs).pipe(shareReplay());
  }

  public getAllFavorites(): Observable<Job[]> {
    return toObservable(this.favoriteJobs).pipe(shareReplay());
  }

  public toggleFavorite(job: Job): void {
    const jobId = job.id;

    if (!this.favoritesJobsId().includes(jobId))
      this.favoritesJobsId.update(jobs => [...jobs, jobId]);
    else
      this.favoritesJobsId.update(jobs => [...jobs].filter(j => j !== jobId));
  }
}
