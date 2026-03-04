import {Component, inject, Input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';
import {Router} from '@angular/router';


@Component({
  selector: 'app-projects-card',
  imports: [
    MatCard,
    MatCardHeader,
    NgOptimizedImage,
    MatCardContent,
    MatButton,
    MatCardActions,
    MatCardTitle
  ],
  templateUrl: './projects-card.html',
  styleUrl: './projects-card.css',
})
export class ProjectsCard {
    @Input() title!: string;
    @Input() iconPath!: string;
    @Input() shortDescription!: string;

    private readonly router = inject(Router);

  seeProject() {
    this.router.navigate(['/projects'],{queryParams: {project: this.toSlug(this.title)}});
  }

  toSlug(title: string): string {
    return title.replace(/\s/g, '-').toLowerCase();
  }
}
