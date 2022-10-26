import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AuthGuardGuard } from 'src/app/guard/auth-guard.guard';
import { CustomerComponent } from 'src/app/pages/customer/customer.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { TeamComponent } from 'src/app/pages/team/team.component';
import { EmailTemplateComponent } from 'src/app/pages/email-template/email-template.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',     canActivate: [ AuthGuardGuard ],
    component: DashboardComponent },
    { path: 'user-profile',  canActivate: [ AuthGuardGuard ], component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'icons/:id',          component: IconsComponent },
    { path: 'customer',          component: CustomerComponent },
    { path: 'product',          component: ProductComponent },
    { path: 'team',          component: TeamComponent },
    { path: 'emailTemplate',          component: EmailTemplateComponent },
    { path: 'maps',           component: MapsComponent }
];
