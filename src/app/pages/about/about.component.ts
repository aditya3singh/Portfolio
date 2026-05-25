import { Component } from '@angular/core';
import { ACHIEVEMENTS } from '../../core/constants/portfolio-data';
import { PROFILE } from '../../core/constants/profile';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly achievements = ACHIEVEMENTS;

  readonly services: Service[] = [
    {
      icon: 'local_gas_station',
      title: 'Enterprise Microservices (IFMS)',
      description:
        'Indian Fuel Management System — Angular 17 + ASP.NET Core 8, Ocelot gateway, SQL Server DB-per-service, Redis, RabbitMQ, Razorpay booking tokens, and full Case Study / HLD / LLD documentation.',
    },
    {
      icon: 'dns',
      title: 'Backend Development',
      description:
        'RESTful APIs with Node.js & Express, MySQL/MongoDB integration, JWT auth, and performance-focused service design.',
    },
    {
      icon: 'layers',
      title: 'Full Stack Applications',
      description:
        'End-to-end MERN and Next.js apps — from database schema and APIs to responsive React frontends.',
    },
    {
      icon: 'api',
      title: 'API Development',
      description:
        'Clean, documented APIs with validation, role-based access, and testing via Postman and automated suites.',
    },
    {
      icon: 'psychology',
      title: 'DSA & Problem Solving',
      description:
        '800+ problems solved, GFG rating 1510+, and strong fundamentals in data structures and algorithms.',
    },
  ];

  readonly techIcons = [
    'javascript',
    'storage',
    'cloud',
    'hub',
    'terminal',
    'memory',
  ];
}
