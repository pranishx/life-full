import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  totalExpenses: number = 0;
  categoryTotals: { [key: string]: number } = {};
  filteredExpenses: any[] = [];
  selectedMonth: number = new Date().getMonth() + 1;
  selectedYear: number = new Date().getFullYear();
  currentYear: number = new Date().getFullYear();
  new: any;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadSummary();
  }

  loadSummary(): void {
    this.totalExpenses = this.expenseService.getTotalExpenses();
    this.categoryTotals = this.expenseService.getExpensesByCategory();
    this.filteredExpenses = this.expenseService.getFilteredExpensesByMonthYear(
      this.selectedMonth,
      this.selectedYear
    );
  }

  onFilterChange(): void {
    this.filteredExpenses = this.expenseService.getFilteredExpensesByMonthYear(
      this.selectedMonth,
      this.selectedYear
    );
  }
}
