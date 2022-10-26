import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router,
        private apiService: ApiServicesService,
    ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  logout(){
    // let user: any[] = [];
    //  user =  JSON.parse(localStorage.getItem('user'));
    // console.log('userID',user[0]._id)
    // this.apiService.logout(user[0]._id).subscribe({
    //   next: (data: any) => {
    //     console.log('user')
  
        localStorage.removeItem('Token');
        localStorage.removeItem('user');
        this.router.navigate([ '/login' ]);
    //   }, error: (err: any) => {

    //     console.log(err, "API ERROR")
    //   }
    // })
  }
}
