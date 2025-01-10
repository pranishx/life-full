import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  expenseList: any[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      console.log(data);
      this.expenseList = data;
    });
  }

  deleteExpense(index: number) {
    this.expenseService.deleteExpense(index);
  }
}
