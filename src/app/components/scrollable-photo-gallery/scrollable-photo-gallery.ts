import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-scrollable-photo-gallery',
  imports: [
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './scrollable-photo-gallery.html',
  styleUrl: './scrollable-photo-gallery.css',
})
export class ScrollablePhotoGallery implements OnChanges{
  @Input() photosUrls!: string[];
  protected actualUrl!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["photosUrls"] && changes["photosUrls"]?.currentValue.length){
      this.actualUrl = changes["photosUrls"].currentValue[0];
    }
  }



  getNextImage(): void {
    const currentIndex = this.photosUrls.indexOf(this.actualUrl);
    const nextIndex = (currentIndex + 1) % this.photosUrls.length;
    this.actualUrl = this.photosUrls[nextIndex];
  }

  GetPrevImage(): void {
    const currentIndex = this.photosUrls.indexOf(this.actualUrl);
    const prevIndex = currentIndex - 1 < 0 ? this.photosUrls.length - 1 : currentIndex - 1;
    this.actualUrl = this.photosUrls[prevIndex];
  }
}
