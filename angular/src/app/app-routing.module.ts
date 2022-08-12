import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { ModalComponent } from "./pages/modal/modal.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'modal', component: ModalComponent },

  { path: '', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
