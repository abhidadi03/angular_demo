import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/storage.service';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-start-point',
  templateUrl: './start-point.component.html',
  styleUrls: ['./start-point.component.css']
})
export class StartPointComponent {
  showNavbar: boolean = true;
  isDarkTheme :boolean = false;
  constructor(private router:Router,private translate:TranslateService,private storageService:StorageService) {
     this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            const hideRoutes = ['/login','/register']
            this.showNavbar = !hideRoutes.includes(event.url);
          }
        });
   }
    getLang(event: Event):string{
    return (event.target as HTMLSelectElement).value;

  }
  switchLang(lang:string){
    this.translate.use(lang);
  }
  Logout(){
    console.log('into the logoot');
      this.storageService.remove('token');
  }
 toggoleTheme() {
  document.body.classList.toggle('dark-theme');
}
toggleTheme(){
  document.body.classList.toggle('dark-theme');
}

}
