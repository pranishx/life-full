import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '250px',
          padding: '20px',
        })
      ),
      state(
        'closed',
        style({
          width: '0',
          padding: '0',
        })
      ),
      transition('open<=>closed', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class AppComponent {
  title = 'expense-tracker';
  isSidebarActive = false;
  toggleSideBar(event: Event) {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
