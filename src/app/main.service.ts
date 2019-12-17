import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getAuthToken() {
    return localStorage.getItem('accessToken');
  }

  postDataApi(url: string, input: any) {
    const accessToken = this.getAuthToken();
    if (!accessToken) {
      return this.http.post(environment.BASE_PATH + url, input);
    } else {
      return this.http.post(environment.BASE_PATH + url, input);
    }
  }

  putDataApi(url: string, input: any) {
    return this.http.put(environment.BASE_PATH + url, input);
  }

  deleteDataApi(url: string, input: any) {
    return this.http.delete(environment.BASE_PATH + url);
  }

  getDataApiWithoutHeaders(url: string, input: any) {
    return this.http.get(environment.BASE_PATH + url);
  }

  getDataAptWithParams(url: string, params: any) {
    const accessToken = this.getAuthToken();
    if (!accessToken) {
      return this.http.get(environment.BASE_PATH + url, {params: params});
    } else {
      return this.http.get(environment.BASE_PATH + url);
    }
  }

  getDataAptWithHeaders(url: string, params: any) {
    return this.http.get(environment.BASE_PATH + url);
  }
}
