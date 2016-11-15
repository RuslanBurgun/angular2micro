import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignupComponent } from "./unprotected/signup.component";
import { SigninComponent } from "./unprotected/signin.component";
import {ProductComponent} from "./protected/product.component";


export const routes: Routes = [

    { path: '', redirectTo: '/signin', pathMatch: 'full'},
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'product', component: ProductComponent },
    // { path: 'page', loadChildren: 'app/page/page.module#PageModule' },
    // { path: 'core', component: CoreComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}