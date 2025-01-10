# Things to learn

- load children or lazy loading load module routing in app routing module.
- what's [formGroup] tag inside html
- what's rxjs? Observable ,BehaviorSubject
- does every Observable needed subscription

## Key Takeaways

====================

- Angular’s default behavior is to reuse components for the same route unless explicitly told to reload.

- router.navigate() triggers the component lifecycle, while manual navigation doesn’t.

## When ngOnInit Executes

==========================

- First Navigation to /expenses:

- When you navigate to /expenses for the first time, the ExpenseListComponent is initialized.

- The ngOnInit lifecycle hook runs, and it subscribes to the observable (getExpenses()).
  Subsequent Navigations to /expenses:

- By default, Angular does not destroy and reinitialize the component if you navigate to the same route.

- Since the component is reused, ngOnInit does not run again, and any subscriptions or logic in ngOnInit won't execute.

- The component keeps its existing state, including the expenseList property, unless explicitly updated.

## Type of Binding in angular

==============================

1.  Interpolation (One-Way Binding)
    Definition: Inserts dynamic values (usually strings) into the HTML.
    Syntax: {{ expression }}
    Where We Used It:
    Displaying the total expenses in the Summary Component.
    Showing values like description, amount, category, etc., in the expense list or filtered expenses.

    ## Example:

    ```
    <p>Total Expenses: ₹{{ totalExpenses }}</p>
    <li *ngFor="let category of categoryTotals | keyvalue">
    {{ category.key }}: ₹{{ category.value }}
    </li>
    ```

2.  Property Binding (One-Way Binding)
    Definition: Dynamically sets the value of an HTML element property.
    Syntax: [property]="expression"
    Where We Used It:
    Setting the max attribute for the year input in the Summary Component.
    Binding values dynamically in the dropdown and input fields.

    ## Example:

    ```
    <input id="year" type="number" [(ngModel)]="selectedYear" [max]="currentYear" />
    <option *ngFor="let month of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" [value]="month">
    {{ month }}
    </option>

    ```

3.  Event Binding
    Definition: Allows handling DOM events and calling component methods when the event occurs.
    Syntax: (event)="expression"
    Where We Used It:
    Capturing the change event for the dropdown and input fields in the Summary Component.
    Handling button clicks for actions like Delete Expense in the Expense List Component.

    ## Example:

    ```
    <select id="month" [(ngModel)]="selectedMonth" (change)="onFilterChange()">
    <option *ngFor="let month of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" [value]="month">
     {{ month }}
    </option>
    </select>
    <button (click)="deleteExpense(i)">Delete</button>
    ```

4.  Two-Way Binding
    Definition: Combines property binding and event binding, allowing data flow between the component and the template.
    Syntax: [(ngModel)]="expression"
    Where We Used It:
    Binding the values of the Month and Year filters in the Summary Component.

    ## Example:

        ```
        <select id="month" [(ngModel)]="selectedMonth" (change)="onFilterChange()">

      <option *ngFor="let month of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" [value]="month">
        {{ month }}
      </option>
    </select>
    <input id="year" type="number" [(ngModel)]="selectedYear" (change)="onFilterChange()" />
    ```
