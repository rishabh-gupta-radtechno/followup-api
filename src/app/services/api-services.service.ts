import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }
  login(payload:any){
    return this.http.post("http://localhost:3000/user/loginUser", payload) 
   }

  register(payload:any){
    return this.http.post("http://localhost:3000/user/addUser", payload) 
   }
  changePassword(UserName:any, newPassword:any){
    let token = JSON.parse(localStorage.getItem('token'))
    var headers = new HttpHeaders().set("authorization", token);

    return this.http.post("http://localhost:3000/user/changePassword", {UserName, newPassword}, {headers}) 
   }
  addCompany(payload:any){    
    return this.http.post("http://localhost:3000/company/addCompany", payload) 
   }
  getAllCompany(){    
    return this.http.get("http://localhost:3000/company/getAllCompany") 
   }
  getCompany(_id:any){    
    return this.http.post("http://localhost:3000/company/getCompany", {_id}) 
   }
  updateCompany(_id:any, payload:any){    
    return this.http.post("http://localhost:3000/company/updateCompany", {_id , ...payload}) 
   }
  paginate(search:any,sort:any, page:any, size:any){  
    return this.http.post("http://localhost:3000/company/paginate", {search,sort, page, size}) 
   }
  logout(_id:any){  
    console.log(_id)
    return this.http.post("http://localhost:3000/user/logout", {_id: _id}) 
   }

   addCustomer(payload:any){    
    return this.http.post("http://localhost:3000/customer/addCustomer", payload) 
   }
   addProduct(payload:any){    
    return this.http.post("http://localhost:3000/product/addProduct", payload) 
   }
   addTeam(payload:any){    
    return this.http.post("http://localhost:3000/team/addTeam", payload) 
   }
   addEmailTemplate(payload:any){    
    return this.http.post("http://localhost:3000/EmailTemplate/addEmailTemplate", payload) 
   }
}
