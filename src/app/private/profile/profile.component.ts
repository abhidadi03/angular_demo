import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private userService:UsersService, private router:Router) { }

  userProfile: any;

  ngOnInit(){
    this.loadUserProfile();
  }
  loadUserProfile(){
      this.userService.getProfile().subscribe({
        next:(res)=>{
          this.userProfile = res;
          console.log('User Profile', res);
        },
        error:(err)=>{
          console.error('Failed to load profile', err);
        }
      });
  }
}
