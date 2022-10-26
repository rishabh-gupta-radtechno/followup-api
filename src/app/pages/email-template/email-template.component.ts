import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent implements OnInit {

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  addEmailTemplate(addEmailTemplateForm: NgForm){
    let user =  JSON.parse(localStorage.getItem('user'));
    console.log(addEmailTemplateForm.form.value)
    console.log(addEmailTemplateForm.form.value)
    addEmailTemplateForm.form.value.CreatedBy = user._id
    addEmailTemplateForm.form.value.IsEnabled = true
    this.apiService.addEmailTemplate(addEmailTemplateForm.form.value).subscribe({
      next: (data: any) => {
        console.log('EmailTemplateData',data)
        this.toastr.success("EmailTemplate successfully added", 'Success');
  
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
