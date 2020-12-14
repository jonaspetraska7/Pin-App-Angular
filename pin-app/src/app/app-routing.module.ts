import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ThemeComponent } from './views/theme/theme.component';
import { PoolComponent } from './views/pool/pool.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/themes', pathMatch: 'full'},
  { path: 'themes', component: ThemeComponent, canActivate: [AuthGuard] },
  { path: 'pools', component: PoolComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'users', component: PoolComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
