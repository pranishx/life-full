import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private localStorageKey = 'expenses';
  private expenses = new BehaviorSubject<any[]>([]);
  constructor() {
    console.log('manual refresh');
    this.refreshLocalStorage();
  }

  getExpenses(): Observable<any[]> {
    return this.expenses.asObservable();
  }

  addExpenses(expense: any): void {
    const currentExpenses = this.getDataFromLocalStorage();
    const updatedExpenses = [...currentExpenses, expense];
    this.expenses.next(updatedExpenses);
    this.addToLocalStorage(updatedExpenses);
  }

  deleteExpense(index: number): void {
    const currentExpenses = this.getDataFromLocalStorage();
    currentExpenses.splice(index, 1);
    this.expenses.next([...currentExpenses]);
    this.addToLocalStorage(currentExpenses);
  }

  getTotalExpenses(): number {
    const currentExpenses = this.getDataFromLocalStorage();
    return currentExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
  }

  getExpensesByCategory(): { [key: string]: number } {
    const currentExpenses = this.getDataFromLocalStorage();

    const categoryTotals: { [key: string]: number } = {};

    currentExpenses.forEach((expense) => {
      if (!categoryTotals[expense.category]) {
        categoryTotals[expense.category] = 0;
      }
      categoryTotals[expense.category] += expense.amount;
    });

    return categoryTotals;
  }

  getFilteredExpensesByMonthYear(month: number, year: number): any[] {
    const currentExpenses = this.getDataFromLocalStorage();
    return currentExpenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return (
        expenseDate.getMonth() === month - 1 && // Months are 0-indexed
        expenseDate.getFullYear() === year
      );
    });
  }

  private addToLocalStorage(expense: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(expense));
  }

  private getDataFromLocalStorage(): any[] {
    const storesItems = localStorage.getItem(this.localStorageKey);
    return storesItems ? JSON.parse(storesItems) : [];
  }

  private refreshLocalStorage(): void {
    const updatedExpenses = this.getDataFromLocalStorage();
    this.expenses.next(updatedExpenses);
  }
}
