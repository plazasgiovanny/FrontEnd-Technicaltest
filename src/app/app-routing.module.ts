import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './PresentationRegister/register.components';
import { SellerEditComponent } from './seller-edit/seller-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: RegisterComponent,
  },
  {
    path: 'edit/:code',
    component: SellerEditComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
