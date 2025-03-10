import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-blog-list',
  standalone: true,
  imports: [],
  templateUrl: './home-blog-list.component.html',
  styleUrl: './home-blog-list.component.scss',
})
export class HomeBlogListComponent {
  @Input() bloglist: any[] = [];
}
