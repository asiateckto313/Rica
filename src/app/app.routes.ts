import { Routes } from '@angular/router';
import { DashboardComponent } from './metronic/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './general/not-found/not-found.component';

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
        path: '**',
        component: NotFoundComponent,
        title: 'Login page',
    },
];
