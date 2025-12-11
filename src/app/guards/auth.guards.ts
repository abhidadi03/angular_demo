import { Injectable } from "@angular/core";
import { StorageService} from "../storage.service";
import { CanActivate,Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router:Router) {}   
    canActivate(): boolean {
      const token = this.storageService.get("token");   
      if(token){
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
    
    }
}
