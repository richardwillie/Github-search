import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import { Profile } from 'selenium-webdriver/firefox';
import { GithubSearch } from '../github-search';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  profile:any[];
  repos:any[];
  username:string
  
  // newSearch = new GithubSearch("")

  constructor(private profileService:ProfileService) {
    this.profileService.getProfileinfo().subscribe(profile=>{
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    });
       
   }
 

  ngOnInit() {
  }
  findProfile(){
    console.log();
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileinfo().subscribe(profile=>{
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
   }
}
 