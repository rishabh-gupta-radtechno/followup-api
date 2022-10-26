import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  addTeam(addTeamForm: NgForm){
    let user =  JSON.parse(localStorage.getItem('user'));
    console.log(addTeamForm.form.value)
    
    this.apiService.addTeam(addTeamForm.form.value).subscribe({
      next: (data: any) => {
        console.log('TeamData',data)
        this.toastr.success("Team successfully added", 'Success');
  
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
