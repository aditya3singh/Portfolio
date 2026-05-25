import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  CERTIFICATES,
  EDUCATION,
  EXPERIENCE,
  IFMS_SKILLS,
  SKILL_BARS,
  TECH_STACK,
} from '../../core/constants/portfolio-data';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('skillsSection') skillsSection?: ElementRef<HTMLElement>;

  readonly education = EDUCATION;
  readonly experience = EXPERIENCE;
  readonly certificates = CERTIFICATES;
  readonly skills = SKILL_BARS;
  readonly techStack = TECH_STACK;

  readonly ifmsSkillGroups: { label: string; items: string[] }[] = [
    { label: 'IFMS Frontend', items: IFMS_SKILLS.frontend },
    { label: 'IFMS Backend', items: IFMS_SKILLS.backend },
    { label: 'IFMS Infrastructure', items: [...IFMS_SKILLS.gateway, ...IFMS_SKILLS.data, ...IFMS_SKILLS.devops] },
    { label: 'IFMS Integrations', items: [...IFMS_SKILLS.messaging, ...IFMS_SKILLS.cache, ...IFMS_SKILLS.integrations] },
  ];

  readonly languages = 'C++, C#, Java, JavaScript, SQL, Python';
  readonly softSkills =
    'Microservices, System Design (HLD/LLD), API Development, Software Engineering, SDLC, Agile';

  ngAfterViewInit(): void {
    const el = this.skillsSection?.nativeElement;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll<HTMLElement>('.skill-progress-fill').forEach((fill) => {
            const target = fill.dataset['width'] ?? '0%';
            fill.style.width = '0%';
            setTimeout(() => {
              fill.style.width = target;
            }, 100);
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }
}
