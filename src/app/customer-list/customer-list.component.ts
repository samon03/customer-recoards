import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../shared/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customer: Customer[] = [];
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomes().subscribe(customer => {
      this.customer = customer;
    });
  }

}
