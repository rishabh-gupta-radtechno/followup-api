import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  addCustomer(addCustomerForm: NgForm){
    let user =  JSON.parse(localStorage.getItem('user'));
    console.log(addCustomerForm.form.value)
    addCustomerForm.form.value.CreatedBy = user._id
    addCustomerForm.form.value.IsEnabled = true
    this.apiService.addCustomer(addCustomerForm.form.value).subscribe({
      next: (data: any) => {
        console.log('customerData',data)
        this.toastr.success("Customer successfully added", 'Success');
  
      }, error: (err: any) => {
        let errorMessage;
        if(err.error.validation){

          errorMessage = err.error.validation.body.message
        }
        else(
          errorMessage = err.error.message
        )
        this.toastr.error(errorMessage, 'error');
      }
    })
  }
}
