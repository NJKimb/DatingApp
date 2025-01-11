import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private http = inject(HttpClient);
  baseurl = "http://localhost:5000/api/";

  login(model: any){
    return this.http.post(this.baseurl + "account/login", model);
  }

}
