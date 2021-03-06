import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Menu2Service {

  constructor(private http: Http) { }

  // showImportT1() {
  //   return this.http.get(api.url + '/api/store/menu2/show/import/import-t1').pipe(map(res => res.json()));
  // }

  showImportT2() {
    return this.http.get(api.url + '/api/store/menu2/show/import/import-t2').pipe(map(res => res.json()));
  }

  showImportT3() {
    return this.http.get(api.url + '/api/store/menu2/show/import/import-t3').pipe(map(res => res.json()));
  }

  showImportT4() {
    return this.http.get(api.url + '/api/store/menu2/show/import/import-t4').pipe(map(res => res.json()));
  }

  showImportT5() {
    return this.http.get(api.url + '/api/store/menu2/show/import/import-t5').pipe(map(res => res.json()));
  }
}
