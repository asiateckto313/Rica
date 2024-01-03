import { Routes } from '@angular/router';
import { DashboardComponent } from './metronic/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { CreateWareHouseComponent } from './metronic/form/ware-house/create/create-warehouse.component';
import { HistoryWarehouse } from './metronic/form/ware-house/history/history.component';
import { WareHouseComponent } from './metronic/form/ware-house/ware-house.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page',
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register page',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard page',

    },
    {
        path: 'warehouse',
        title: 'WareHouse',
        component: WareHouseComponent,
        children: [
            {
                path: 'create',
                component: CreateWareHouseComponent,
                title: 'Create Warehouse page',
        
            },
            {
                path: 'list',
                component: HistoryWarehouse,
                title: 'Warehouse history page',
        
            },

        ]

    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'Login page',
    },
];
