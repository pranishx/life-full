import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let expenseService: ExpenseService;

  beforeEach(async () => {
    // when writing unit test need to create a spy for the services
    const spy = jasmine.createSpyObj('ExpenseService', [
      'getTotalExpenses',
      'getFilteredExpensesByMonthYear',
      'getTotalExpenses',
    ]);
    await TestBed.configureTestingModule({
      declarations: [SummaryComponent],
      imports: [FormsModule],
      providers: [ExpenseService],
    }).compileComponents();

    expenseService = TestBed.inject(
      ExpenseService
    ) as jasmine.SpyObj<ExpenseService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    expenseService = TestBed.inject(ExpenseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadSummary() inside ngOnInit', () => {
    /* 

    loadSummary() is a method inside the component that doesn’t return a value.
    Instead, it updates the component state (totalExpenses).
    We only need to check if the method was called, not what it returns.
    
    */

    spyOn(component, 'loadSummary');
    component.ngOnInit();
    expect(component.loadSummary).toHaveBeenCalled();
  });

  it('should call total expenses correctly', () => {
    /*
    
    expenseService.getTotalExpenses() returns a value (number), so we must mock what it should return.
    Since the real method interacts with data storage (e.g., Local Storage or an API),
    we fake its return value for isolated testing
    
    */

    spyOn(expenseService, 'getTotalExpenses').and.returnValue(500);
    component.loadSummary();
    expect(component.totalExpenses).toBe(500);
  });

  /* 
   Here filter method didn't call we just mocking the procedure. 
  */
  it('should call filterChange() when month is changed ', () => {
    component.selectedMonth = 1;
    component.onFilterChange();
    fixture.detectChanges();
    expect(component.filteredExpenses).toBeDefined();
  });

  it('should call filterChange() when year is changed ', () => {
    component.selectedYear = 2025;
    component.onFilterChange();
    fixture.detectChanges();
    expect(component.filteredExpenses).toBeDefined();
  });

  it('should initiate initial values to summary components', () => {
    expect(component.totalExpenses).toBe(0);
    expect(component.categoryTotals).toEqual({});
    expect(component.filteredExpenses).toEqual([]);
    expect(component.selectedMonth).toBe(new Date().getMonth() + 1);
    expect(component.selectedYear).toBe(new Date().getFullYear());
    expect(component.currentYear).toBe(new Date().getFullYear());
  });
});
