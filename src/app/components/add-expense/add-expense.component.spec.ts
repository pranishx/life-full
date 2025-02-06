import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseComponent } from './add-expense.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';

describe('AddExpenseComponent', () => {
  let component: AddExpenseComponent;
  let fixture: ComponentFixture<AddExpenseComponent>;
  let expenseService: ExpenseService;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ExpenseService', ['addExpenses']);
    await TestBed.configureTestingModule({
      declarations: [AddExpenseComponent],
      imports: [ReactiveFormsModule],
      providers: [ExpenseService],
    }).compileComponents();

    expenseService = TestBed.inject(
      ExpenseService
    ) as jasmine.SpyObj<ExpenseService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
