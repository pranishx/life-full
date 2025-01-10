import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
  {
    path: 'expenses',
    loadChildren: () =>
      import('./modules/expense/expense.module').then((m) => m.ExpenseModule),
  },
  { path: '**', redirectTo: '/expenses' }, // Redirect for invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
