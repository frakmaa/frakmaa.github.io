import { Component, input, output } from '@angular/core';
import { Job } from '../../model/job';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css'
})
export class JobItemComponent {
  readonly job = input.required<Job>();
  readonly favoriteButton = input(true);

  readonly favorite = output();
}
