import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-hover-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-hover-dropdown.component.html',
  styleUrl: './nav-hover-dropdown.component.scss',
})
export class NavHoverDropdownComponent {
  @Input() isDropdownOpen: boolean = false;
}
