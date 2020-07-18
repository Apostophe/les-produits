import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
    providedIn: 'root',
})
export class GachaService {
   constructor(private http: HttpClient) { }
 
   getAllImages():Observable<Array<String>>{
       return this.http.get<any>('http://localhost:3000' + '/gacha');
   }
}