import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StartPointComponent } from './start-point/entry-point/start-point.component';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthGuard } from '../guards/auth.guards';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { ShipDaModule } from './ship-da/ship-da.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
const routes:Routes =[
  {
    path:'',component:StartPointComponent,
    canActivate:[AuthGuard],
      children:[
      {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
      {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
      {path:'ship-da',loadChildren:()=> import('./ship-da/ship-da.module').then(m =>m.ShipDaModule)},
      {path:'',redirectTo:'profile',pathMatch:'full'}
    ]
  }
]

@NgModule({
  declarations: [ProfileComponent,UsersComponent, StartPointComponent, PopUpComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    SharedModule,
    ShipDaModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PrivateModule { }
