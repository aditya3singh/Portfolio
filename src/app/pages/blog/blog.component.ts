import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { BLOG_POSTS } from '../../core/constants/portfolio-data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgClass],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  readonly posts = BLOG_POSTS;
}
