import { Component } from '@angular/core';
import { PROFILE } from '../../../core/constants/profile';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  readonly profile = PROFILE;
  readonly phoneTel = 'tel:+918953963311';
  showContacts = false;

  toggleContacts(): void {
    this.showContacts = !this.showContacts;
  }
}
