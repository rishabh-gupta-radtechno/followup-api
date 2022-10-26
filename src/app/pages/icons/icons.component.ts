import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  companyId: string;
  companyData: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('id');
    console.log(this.companyId)
    this.getCompanyData()
  }
  getCompanyData() {
    if (!this.companyId) {
      return
    }
    this.apiService.getCompany(this.companyId).subscribe({
      next: (data: any) => {
        console.log('companyData', data.company[0])
        this.companyData = data.company[0]

      }, error: (err: any) => {

        this.toastr.error("API Error", 'error');

        console.log(err, "API ERROR")
      }
    })
  }

  updateCompany(addCompanyForm: NgForm){
    console.log(addCompanyForm)
    // this.apiService.updateCompany(this.companyId, addCompanyForm).subscribe({
    //   next: (data: any) => {
    //     console.log('companyData', data)
    //     this.toastr.success("Company successfully updated", 'Success');

    //   }, error: (err: any) => {

    //     this.toastr.error("API Error", 'error');

    //     console.log(err, "API ERROR")
    //   }
    // })
  
  }


  addCompany(addCompanyForm: NgForm) {
    console.log(addCompanyForm.form.value)
    if(!this.companyId){
    this.apiService.addCompany(addCompanyForm.form.value).subscribe({
      next: (data: any) => {
        console.log('companyData', data)
        this.toastr.success("Company successfully added", 'Success');

      }, error: (err: any) => {

        this.toastr.error("API Error", 'error');

        console.log(err, "API ERROR")
      }
    })
  }
  else if(this.companyId){
    
    this.apiService.updateCompany(this.companyId,addCompanyForm.form.value).subscribe({
      next: (data: any) => {
        console.log('companyData', data)
        this.toastr.success("Company successfully updated", 'Success');

      }, error: (err: any) => {

        this.toastr.error("API Error", 'error');

        console.log(err, "API ERROR")
      }
    })
  }
  }
}
