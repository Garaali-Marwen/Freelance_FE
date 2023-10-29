import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "backOffice", loadChildren: () => import("./back-office/back-office.module").then((m) => m.BackOfficeModule)},
  {path: "", loadChildren: () => import("./front-office/front-office.module").then((m) => m.FrontOfficeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
