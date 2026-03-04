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
      title: 'Script in Azure CLI and powershell for taking repos from azure devops',
      description: 'This is not regular script easy available on the internet it takes repo with specific branch and restores branch if it was deleted ',
      url: "img_3.png"
    }
  ]

}
