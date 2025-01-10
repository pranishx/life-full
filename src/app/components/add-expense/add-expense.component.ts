import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense.service';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent {
  expenseForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private router: Router
  ) {
    //creating form
    this.expenseForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
      amount: [0, [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      this.expenseService.addExpenses(this.expenseForm.value);
      this.expenseForm.reset();
      this.router.navigate(['/expenses']);
    } else {
      console.log('Form is invalid');
    }
  }
}
