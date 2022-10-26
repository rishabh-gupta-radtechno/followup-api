import { Component, OnInit } from '@angular/core';
declare const google: any;
import { NgForm } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // let map = document.getElementById('map-canvas');
    // let lat = map.getAttribute('data-lat');
    // let lng = map.getAttribute('data-lng');

    // var myLatlng = new google.maps.LatLng(lat, lng);
    // var mapOptions = {
    //     zoom: 12,
    //     scrollwheel: false,
    //     center: myLatlng,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     styles: [
    //       {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
    //       {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
    //       {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
    //       {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
    //       {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
    //       {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
    //       {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
    //       {"featureType":"water","elementType":"all","stylers":[{"color":'#5e72e4'},{"visibility":"on"}]}]
    // }

    // map = new google.maps.Map(map, mapOptions);

    // var marker = new google.maps.Marker({
    //     position: myLatlng,
    //     map: map,
    //     animation: google.maps.Animation.DROP,
    //     title: 'Hello World!'
    // });

    // var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
    //     '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';

    // var infowindow = new google.maps.InfoWindow({
    //     content: contentString
    // });

    // google.maps.event.addListener(marker, 'click', function() {
    //     infowindow.open(map, marker);
    // });
  }

  changePassword(changePasswordForm : NgForm){
    console.log('changePasswordForm',changePasswordForm.form.value)
    if(!changePasswordForm.form.value.Password){
      return  this.toastr.error("Password is required", 'error');
    }
    if(!changePasswordForm.form.value.newPassword){
      return  this.toastr.error("Confirm Password is required", 'error');
    }
    if(changePasswordForm.form.value.Password !== changePasswordForm.form.value.newPassword){
      return  this.toastr.error("Password does not match", 'error');

    }
    else{
    let user =  JSON.parse(localStorage.getItem('user'));
    console.log(user[0].UserName)
    let UserName = user[0].UserName
    let newPassword = changePasswordForm.form.value.Password
       this.apiService.changePassword(UserName, newPassword).subscribe({
      next: (data: any) => {
        console.log('data',data)
        this.toastr.success("Password change successfully", 'Success');
      }, error: (err: any) => {
       this.toastr.error("API ERROR", 'error');
        console.log(err, "API ERROR")
      }
    })
        this.toastr.success("Password match", 'success');

    }
    // this.apiService.changePassword(changePasswordForm.form.value).subscribe({
    //   next: (data: any) => {
    //     console.log('data',data)
    //     this.toastr.success("Password change successfully", 'Success');
    //   }, error: (err: any) => {
    //    this.toastr.error("wrong Id or password", 'error');
    //     console.log(err, "API ERROR")
    //   }
    // })
  }

}
