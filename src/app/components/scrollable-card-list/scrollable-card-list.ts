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

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy(
      {
        left: -300,
        behavior: 'smooth'
      }
    )
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy(
      {
        left: 300,
        behavior: 'smooth'
      }
    )
  }
}
