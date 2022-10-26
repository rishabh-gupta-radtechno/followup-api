import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private apiService: ApiServicesService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  login(loginForm: NgForm) {
    console.log(loginForm.form.value)
    this.apiService.login(loginForm.form.value).subscribe({
      next: (data: any) => {

        console.log(data.userCredentials)
        let token = data.token;
        localStorage.setItem('Token', token);
        localStorage.setItem('user', JSON.stringify(data.userCredentials));
        this.router.navigate(['/dashboard']);

        // },(err :any)=>{
      }, error: (err: any) => {

        this.toastr.error(err.error.errorMessage, 'error');

        console.log(err, "API ERROR")
      }
    })
  }
}
