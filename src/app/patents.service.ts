import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Patent, PatentDetail } from './patent';

@Injectable({
  providedIn: 'root'
})

export class PatentsService {

  private patentsUrl = environment.BASE_PATH + 'patents/';
  private patentDetailUrl = environment.BASE_PATH + `patents/details/?`;

  constructor(
    private http: HttpClient
    ) { }


    getPatents(): Observable<Patent[]> {
      return this.http.get<Patent[]>(this.patentsUrl).pipe(
        map(patents => patents),
        tap( _ => this.log(`fetched patents`))
      );
    }

    getPatentDetails(policyNumber: string): Observable<PatentDetail> {
      return this.http.get<PatentDetail>(this.patentDetailUrl + `policy_number=${policyNumber}`).pipe(
        map(patents => patents),
        tap( _ => this.log(`fetched patent details`))
      );
    }

    private log(message: string) {
      console.log(message);
    }

}
