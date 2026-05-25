import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { TopNavComponent } from '../shared/components/top-nav/top-nav.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MobileNavComponent } from '../shared/components/mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopNavComponent, FooterComponent, MobileNavComponent],
  templateUrl: './portfolio-layout.component.html',
})
export class PortfolioLayoutComponent {}
