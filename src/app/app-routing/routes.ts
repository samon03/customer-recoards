import { Routes } from "@angular/router";

import { CustomerListComponent } from '../customer-list/customer-list.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

export const routes: Routes = [
    { path: '', component: CustomerListComponent },
    { path: 'add', component: AddCustomerComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
];
