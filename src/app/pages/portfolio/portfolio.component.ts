import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  IFMS_BUSINESS_IMPACT,
  IFMS_META,
  IFMS_PROBLEM_SOLUTIONS,
  IFMS_SERVICES,
  IFMS_IMAGE,
  IFMS_SKILLS,
  PROJECTS,
  Project,
} from '../../core/constants/portfolio-data';

type FilterKey = 'all' | 'fullstack' | 'backend' | 'mern' | 'enterprise';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  activeFilter: FilterKey = 'all';
  selectedProject: Project | null = null;

  readonly ifmsMeta = IFMS_META;
  readonly ifmsImage = IFMS_IMAGE;
  readonly ifmsServices = IFMS_SERVICES;
  readonly ifmsProblems = IFMS_PROBLEM_SOLUTIONS;
  readonly ifmsImpact = IFMS_BUSINESS_IMPACT;
  readonly ifmsSkills = IFMS_SKILLS;

  readonly ifmsSkillGroups: { label: string; items: string[] }[] = [
    { label: 'Frontend', items: IFMS_SKILLS.frontend },
    { label: 'Backend', items: IFMS_SKILLS.backend },
    { label: 'Gateway', items: IFMS_SKILLS.gateway },
    { label: 'Data', items: IFMS_SKILLS.data },
    { label: 'Messaging & Cache', items: [...IFMS_SKILLS.messaging, ...IFMS_SKILLS.cache] },
    { label: 'Integrations', items: IFMS_SKILLS.integrations },
    { label: 'DevOps', items: IFMS_SKILLS.devops },
    { label: 'Patterns', items: IFMS_SKILLS.patterns },
  ];

  readonly filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'enterprise', label: 'IFMS / Enterprise' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'mern', label: 'MERN' },
    { key: 'backend', label: 'Backend' },
  ];

  readonly projects = PROJECTS;

  setFilter(filter: FilterKey): void {
    this.activeFilter = filter;
  }

  isVisible(project: Project): boolean {
    return this.activeFilter === 'all' || project.filter === this.activeFilter;
  }

  openProject(project: Project): void {
    this.selectedProject = this.selectedProject?.title === project.title ? null : project;
  }
}
