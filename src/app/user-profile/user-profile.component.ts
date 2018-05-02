import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile:any[]

  constructor(private profileService:ProfileService) {
    this.profileService.getProfileinfo().subscribe(profile=>{
      console.log(profile);
      this.profile = profile
    });
   }

  ngOnInit() {
  }

}
