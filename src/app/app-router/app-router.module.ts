import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableFunComponent } from '../table-fun/table-fun.component';
import { WelcomeScreenComponent } from '../welcome-screen/welcome-screen.component';


const routes: Routes = [
    { path: '', redirectTo: '/table-fun', pathMatch: 'full' },
    { path: 'welcome-screen', component: WelcomeScreenComponent },
    { path: 'table-fun', component: TableFunComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
