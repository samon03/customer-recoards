import { Injectable } from '@angular/core';

import { Customer } from '../shared/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer: Customer;
  customer: Customer[];
  readonly baseURL = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }


  getCustomes(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseURL);
  }

  getCustomer(id: String): Observable<Customer> {
    return this.http.get<Customer>(this.baseURL + `/${id}`);
  }
  
  postCustomer(customer: Customer): Observable<Customer[]>{
     return this.http.post<Customer[]>(this.baseURL, customer);
     console.log(customer);
     
  }

  putCustomer(customer: Customer): Observable<Customer[]>{
    return this.http.put<Customer[]>(this.baseURL + `/${customer.id}`, customer);
  }


}
