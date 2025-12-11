import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipDaRoutingModule } from './ship-da-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    ShipDaRoutingModule,
    SharedModule
  ]
})
export class ShipDaModule { }
