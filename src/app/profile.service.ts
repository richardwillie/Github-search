import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  private userName:string;
  private clientId:"b3fb91a1bde25d2ace5b"
  private clientSecret:"09ab97aae2f6c145c17be2e1dcc4d9f73fb9258d"

  constructor(private http:Http) { 
    console.log("service is now ready!")
    this.userName = "richardwillie"
  }
  getProfileinfo(){
  return this.http.get("https://api.github.com/users/richardwillie"+this.userName+"?client_Id=" + this.clientId + "&client_Secret=" + this.clientSecret)
  .map(res => res.json());
 }
}