import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  footermenuurl = 'assets/data/footermenu.json';
  homecontenturl
  getConfig() {
    return this.http.get(this.footermenuurl);
  }
  getUrlConfig(file: string) {
    return this.http.get('assets/data/' + file);
  }
  getPageData(url: string) {
    return this.http.get(url);
  }
}