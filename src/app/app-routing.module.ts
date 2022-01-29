import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ListProductComponent } from './list-product/list-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import  { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'products', canActivate: [AuthGuard], component: ListProductComponent },
  { path: 'my-orders', canActivate: [AuthGuard], component: MyOrdersComponent },
  { path: 'add-pet', canActivate: [AuthGuard], component: AddProductComponent },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
