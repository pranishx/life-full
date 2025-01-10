import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseListComponent } from 'src/app/components/expense-list/expense-list.component';
import { AddExpenseComponent } from 'src/app/components/add-expense/add-expense.component';
import { SummaryComponent } from 'src/app/components/summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExpenseListComponent, AddExpenseComponent, SummaryComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ExpenseModule {}
