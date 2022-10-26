import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private apiService : ApiServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  register(registerForm:NgForm){
    console.log(registerForm.form.value)
      this.apiService.register(registerForm.form.value).subscribe({
        next: (data: any) => {
      console.log('data',data)
      console.log("Success")
      this.toastr.success('Successfully Logged In', 'SuccessFull!');

      this.router.navigate([ '/dashboard' ]);
      
    },error: (err: any) => {
  
  
  console.log(err,"API ERROR")
    }
  })
  }
}
