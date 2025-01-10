import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from 'src/app/components/add-expense/add-expense.component';
import { ExpenseListComponent } from 'src/app/components/expense-list/expense-list.component';
import { SummaryComponent } from 'src/app/components/summary/summary.component';

const routes: Routes = [
  { path: '', component: ExpenseListComponent },
  { path: 'add', component: AddExpenseComponent },
  { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseRoutingModule {}
