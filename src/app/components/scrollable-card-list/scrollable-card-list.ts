import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ProjectsCard} from '../projects-card/projects-card';
import {MatIcon} from '@angular/material/icon';
import {ProjectData} from '../../interfaces/project-data';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-scrollable-card-list',
  imports: [
    ProjectsCard,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './scrollable-card-list.html',
  styleUrl: './scrollable-card-list.css',
})
export class ScrollableCardList {
  @Input() cards!: ProjectData[]
  @ViewChild('scrollContainer', {static: false}) scrollContainer!: ElementRef;


  private readonly scrollStep = 340; // 320px karta + ok. 20px gap

  scrollLeft(): void {
    const container = this.scrollContainer?.nativeElement;
    if (!container) return;

    container.scrollBy({
      left: -this.scrollStep,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    const container = this.scrollContainer?.nativeElement;
    if (!container) return;

    container.scrollBy({
      left: this.scrollStep,
      behavior: 'smooth'
    });
  }
}
