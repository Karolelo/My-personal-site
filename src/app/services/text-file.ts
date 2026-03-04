import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TextFile {
  private readonly http = inject(HttpClient);

  getTextFile(url: string): Observable<string> {
    return this.http.get(url, {responseType: 'text'});
  }

  getJsonFile(url: string): Observable<any> {
    return this.http.get(url, {responseType: 'json'});
  }
}
