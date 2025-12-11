import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guards';
import { ProfileComponent } from './private/profile/profile.component';
import { UsersComponent } from './private/users/users.component';
import { StartPointComponent } from './private/start-point/entry-point/start-point.component';
const routes: Routes = [

  {
    path:'login',
    // component:LoginComponent ,
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path:'dashboard',
    loadChildren:() => import('./private/private.module').then(m => m.PrivateModule),
    canActivate:[AuthGuard]
  },
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

