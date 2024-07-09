
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsComponent } from './registration/form/form.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {path: '/forms', 'loadChildren: () => import('./login/login.module.ts')
    .then(m => m.LazyLoadingModule)},
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: FormsComponent },
  { path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }