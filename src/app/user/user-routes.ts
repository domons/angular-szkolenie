import { Routes } from '@angular/router';
import { PageUserProfileComponent } from './pages/page-user-profile/page-user-profile.component';
import { PageUserRegisterComponent } from './pages/page-user-register/page-user-register.component';
import { PageUserLoginComponent } from './pages/page-user-login/page-user-login.component';

export const routes: Routes = [
    {
        path: 'profile',
        component: PageUserProfileComponent
    },
    {
        path: 'register',
        component: PageUserRegisterComponent
    },
    {
        path: 'login',
        component: PageUserLoginComponent
    }
];