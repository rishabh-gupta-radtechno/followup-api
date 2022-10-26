import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { CompanyDataComponent } from './pages/company-data/company-data.component';
import { TokenInnterceptorService } from './services/token-innterceptor.service';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProductComponent } from './pages/product/product.component';
import { TeamComponent } from './pages/team/team.component';
import { EmailTemplateComponent } from './pages/email-template/email-template.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CompanyDataComponent,
    CustomerComponent,
    ProductComponent,
    TeamComponent,
    EmailTemplateComponent
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInnterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
