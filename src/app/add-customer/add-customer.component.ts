import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../shared/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
  providers: [CustomerService]
})
export class AddCustomerComponent implements OnInit {
  // customer: Customer[];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    // this.customerService.getCustomes().subscribe(customer => {
    //   this.customer = customer;
    // });
  }

  onSubmit(form: NgForm) {
    this.customerService.postCustomer(form.value).subscribe(item => {
      console.log(item);
      this.router.navigate(['/home']);
      
    });
  }

}
