import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollablePhotoGallery} from '../../components/scrollable-photo-gallery/scrollable-photo-gallery';
import {TextFile} from '../../services/text-file';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-project-info',
  imports: [
    ScrollablePhotoGallery,
    AsyncPipe
  ],
  templateUrl: './project-info.html',
  styleUrl: './project-info.css',
})
export class ProjectInfo implements OnInit {
  private readonly route = inject(ActivatedRoute)
  private readonly textFile = inject(TextFile);
  public projectName!: string;
  public projectDescription$!: Observable<string>;
  protected photosUrl!: string[];
  ngOnInit() {
    let slug = this.route.snapshot.queryParamMap.get('project') ?? "project not exists";
    this.textFile.getJsonFile('projects/' + slug + '/project.json').subscribe({
      next: (next) => {
        this.projectName = next.title;

        let path = 'projects/' + slug +'/' + next.descriptionFile
        this.readFile(path);

        this.photosUrl = next.photos.map((photo: string) => 'projects/' + slug + '/' + photo);

      },
      error: (error) => {
          console.log(error);
      }
    });
  }
  readFile(filePath: string) {
    this.projectDescription$ = this.textFile.getTextFile(filePath);
  }
}
