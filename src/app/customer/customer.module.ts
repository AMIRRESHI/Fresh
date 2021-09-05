import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [ReactiveFormsModule, CustomerRoutingModule, SharedModule],
  declarations: [CustomerRoutingModule.components]
})
export class CustomerModule { }
