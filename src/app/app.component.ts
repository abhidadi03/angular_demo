import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { UsersService } from './users.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavbar: boolean = true;
  constructor(
    private router: Router,
    private userService:UsersService,
    private translate:TranslateService
  
  ) {
    this.translate.setDefaultLang('en');
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hideRoutes = ['/login','/register']
        this.showNavbar = !hideRoutes.includes(event.url);
      }
    });
  }
  title = 'my-app';
  getLang(event: Event):string{
    return (event.target as HTMLSelectElement).value;

  }
  switchLang(lang:string){
    this.translate.use(lang);
  }
  redirectToLogin(){
    console
    this.router.navigate(['/login']);
  }

  getProfile(){
    console.log('Getting profile data');
    this.userService.getProfile().subscribe({
      next:(res)=>{
        console.log('Profile data', res);
      },
      error:(err)=>{
        console.error('Failed to get profile', err);
      }
    });
  }
  ngOnInit(){
    console.log('Appcomponent loaded');
  }
}
