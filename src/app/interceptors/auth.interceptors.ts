import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { StorageService } from "../storage.service";
import {Router} from '@angular/router';
import { catchError, throwError } from "rxjs";
export const authInterceptor: HttpInterceptorFn = (req, next) => {  

    const storage = inject(StorageService);
    const token = storage.get('token');
    const router = inject(Router);
    if(token){
        const authreq = req.clone({
            setHeaders:{
                Authorization: `Bearer ${token}`
            }
        });
        return next(authreq).pipe(
            catchError((err =>{
                if(err.status === 401){
                    router.navigate(['/login']);
                }
                return throwError(err);
            }))
        );
    }
    else{
        return next(req);
    }
}
