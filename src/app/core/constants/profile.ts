export const PROFILE = {
  name: 'Aditya Singh Gautam',
  title: 'Full Stack Developer',
  email: 'singhaditya20030@gmail.com',
  phone: '+91 8953963311',
  location: 'Phagwara, Punjab 144411',
  linkedin: 'https://www.linkedin.com/in/gautam080706',
  github: 'https://github.com/aditya3singh',
  githubRepos: 'https://github.com/aditya3singh?tab=repositories',
  portrait: '/images/profile.png',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27146.5!2d75.77!3d31.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a50fdab8e8c0f%3A0x8e5e5e5e5e5e5e5e!2sPhagwara%2C%20Punjab!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin',
};

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', path: '/about', icon: 'person' },
  { label: 'Resume', path: '/resume', icon: 'description' },
  { label: 'Portfolio', path: '/portfolio', icon: 'work' },
  { label: 'Blog', path: '/blog', icon: 'article' },
  { label: 'Contact', path: '/contact', icon: 'mail' },
];
