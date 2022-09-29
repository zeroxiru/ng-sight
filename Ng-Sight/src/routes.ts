import {Routes} from '@angular/router';
import { SectionSalesComponent } from './Sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './Sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './Sections/section-health/section-health.component';

export const appRoutes: Routes = [
{path: 'sales', component:SectionSalesComponent},
{path: 'orders', component:SectionOrdersComponent},
{path: 'health', component:SectionHealthComponent},
{path: '', redirectTo:'/sales', pathMatch:'full'},


];