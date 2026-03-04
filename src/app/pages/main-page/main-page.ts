import { Component } from '@angular/core';
import {ScrollableCardList} from '../../components/scrollable-card-list/scrollable-card-list';
import {ProjectData} from '../../interfaces/project-data';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [
    ScrollableCardList,
    NgOptimizedImage
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  projects: ProjectData[] = [
    {
      title: 'Engineer thesis',
      description: "This project I created with my college for my engineer thesis it's application for managing workers in small or medium companies",
      url: "img.png"
    },
    {
      title: 'Prisoners manager',
      description: 'System design for managing prisoners using Winforms for university project',
      url: "img_2.png"
    },
    {
      title: 'Azure Script',
      description: 'Script for taking repo for projects from Azure Devops very advanced',
      url: "img_3.png"
    }
  ]

}
