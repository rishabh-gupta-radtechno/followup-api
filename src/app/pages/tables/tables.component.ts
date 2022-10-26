import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../services/api-services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  companies: [] = [];
  next: number;
  previous: number;
  page: number = 1;
  pageSize: number = 3;
  sortingValue:any = 'Name' + ',' + 'desc';
  orderBy:boolean = true;
  search:any;
  ngOnInit() {
    this.displayCompanyTable()
  }
  displayCompanyTable() {

    this.apiService.paginate(this.search, this.sortingValue,this.page, this.pageSize).subscribe({
      next: (data: any) => {
        console.log('data', data)
        this.companies = data.data;
        this.previous = data.previous;
        this.next = data.next;
      }
    })
  }
 
  sorting(value:any){
    let order: string;
    if(this.orderBy){
      order = 'asc';
    }else{
      order = 'desc';
    }
    this.sortingValue = value.val + ',' + order;
    this.displayCompanyTable();
    this.orderBy = !this.orderBy

  }

  previousBtn() {
    this.page--;
    this.displayCompanyTable();
  }
  nextBtn() {
    this.page++;
    console.log(this.page)
    this.displayCompanyTable();

  }

  edit(){
    console.log('edit')
  }
  searchData(event:any){

    this.search = event.target.value;
    console.log(this.search)
    this.displayCompanyTable()
  }
}
