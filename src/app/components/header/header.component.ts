import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { SigninComponent } from '../../auth/signin/signin.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '../../auth/signup/signup.component';
import { NavHoverDropdownComponent } from '../nav-hover-dropdown/nav-hover-dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    NavHoverDropdownComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode: boolean = false;
  activeDropdown: string = '';

  constructor(
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode = savedTheme === 'dark';
      }
      this.applyTheme();
    }
  }

  toggleDropdown(menu: string) {
    this.activeDropdown = menu;
  }

  openSigninPopup() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px',
      disableClose: true,
    });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.getEmployeList();
    //   }
    // });
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  getThemeStatus(): boolean {
    return this.isDarkMode;
  }
}
