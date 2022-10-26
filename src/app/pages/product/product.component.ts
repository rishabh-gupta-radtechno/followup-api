import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  addProduct(addProductForm: NgForm){
    let user =  JSON.parse(localStorage.getItem('user'));
    console.log(addProductForm.form.value)
        addProductForm.form.value.CreatedBy = user._id
        addProductForm.form.value.IsEnabled = true
    this.apiService.addProduct(addProductForm.form.value).subscribe({
      next: (data: any) => {
        console.log('ProductData',data)
        this.toastr.success("Product successfully added", 'Success');
  
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
