import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeoresComponent }      from '../app/heores/heores.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'heroes', component: HeoresComponent },
  {path:'dashboard',component:DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { 

}
