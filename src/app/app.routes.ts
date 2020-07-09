import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'filter/:id/:typecontract', component: FilterComponent},
    { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
