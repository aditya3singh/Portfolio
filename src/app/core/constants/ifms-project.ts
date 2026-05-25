/** Content sourced from IFMS_Full_Documentation.docx — Final Master Build */

/** Fuel pump imagery for IFMS portfolio (local asset). */
export const IFMS_IMAGE = {
  url: '/images/ifms-fuel.png',
  alt: 'Fuel pump nozzles at a petrol station — Diesel, Super E10, Super, and Super Plus',
};

export const IFMS_META = {
  name: 'Indian Fuel Management System (IFMS)',
  version: 'Final Master Build',
  role: 'Solo Developer — Full Stack',
  architecture: 'Microservices + Clean Architecture + Docker',
  frontend: 'Angular 17 SPA (Port :4200)',
  backend: 'ASP.NET Core 8 (.NET 8 LTS)',
  gateway: 'Ocelot API Gateway (Port :5000)',
  auth: 'JWT Bearer + BCrypt (work factor 12) + RBAC',
  database: 'SQL Server 2022 — DB-per-service pattern',
  containers: 'Docker Compose — single command startup',
};

export const IFMS_SERVICES = [
  { name: 'Identity Service', port: ':5001', db: 'IFMS_IdentityDB', purpose: 'Users, roles, password hashes', status: 'Built' },
  { name: 'Inventory Service', port: ':5002', db: 'IFMS_InventoryDB', purpose: 'Fuel stocks, prices, live status', status: 'Built' },
  { name: 'Sales Service', port: ':5003', db: 'IFMS_SalesDB', purpose: 'Transactions, immutable sale logs', status: 'Built' },
  { name: 'Admin Service', port: ':5004', db: 'IFMS_AdminDB', purpose: 'Fraud logs, KPI dashboards', status: 'Built' },
  { name: 'Notification Service', port: ':5005', db: 'Stateless', purpose: 'Twilio SMS + SendGrid email', status: 'Planned' },
  { name: 'Station Service', port: ':5006', db: 'IFMS_StationDB', purpose: 'Station metadata, geo coordinates', status: 'Planned' },
  { name: 'Booking Service', port: ':5007', db: 'IFMS_BookingDB + Redis', purpose: 'Prepaid booking, Razorpay, IFM tokens', status: 'Planned' },
];

export const IFMS_PROBLEM_SOLUTIONS = [
  { pain: 'No real-time fuel stock visibility', module: 'Inventory Service', fix: 'Live FuelStocks — auto-deducted on every sale' },
  { pain: 'Manual sale recording (paper receipts)', module: 'Sales Service', fix: 'Digital dealer records + immutable transaction log' },
  { pain: 'Fuel theft & quantity manipulation', module: 'Admin Service', fix: 'Auto-flag: >500L single txn, 10+ txns/hour/station' },
  { pain: 'No pre-booking — long queues', module: 'Booking Service', fix: 'Razorpay payment + cryptographic IFM token' },
  { pain: 'Manual Excel admin reports', module: 'Admin Service', fix: 'Real-time KPI dashboard' },
  { pain: 'No centralized user/dealer management', module: 'Identity Service', fix: 'Role-based accounts — instant deactivation' },
  { pain: 'Cross-station fraud undetected', module: 'Admin Service', fix: 'Centralized fraud rules across all stations' },
];

export const IFMS_BUSINESS_IMPACT = [
  { metric: 'Stock reporting lag', before: '24–48 hours (manual)', after: 'Real-time (<1 sec)', improvement: '~99% faster' },
  { metric: 'Sale recording time', before: '3–5 minutes (paper)', after: '~10 seconds (digital)', improvement: '~95% faster' },
  { metric: 'Fraud detection', before: 'Weekly manual audit', after: 'Automated real-time', improvement: 'Immediate alerts' },
  { metric: 'Customer wait time', before: '20–40 min queue', after: 'Book ahead, arrive when ready', improvement: 'Significantly reduced' },
  { metric: 'Admin reports', before: 'Weekly Excel', after: 'Instant dashboard', improvement: 'Real-time' },
  { metric: 'Token validation', before: 'N/A', after: '<50ms (Redis)', improvement: 'New capability' },
];

export const IFMS_SKILLS = {
  frontend: ['Angular 17', 'Angular Material', 'RxJS', 'JWT Interceptor', 'ngx-qrcode', 'TypeScript'],
  backend: ['ASP.NET Core 8', 'Clean Architecture', 'REST APIs', 'BCrypt', 'JWT (HS256)', 'Entity Framework'],
  gateway: ['Ocelot API Gateway', 'Rate Limiting', 'CORS', 'MMLib.SwaggerForOcelot'],
  data: ['SQL Server 2022', 'DB-per-Service', 'EF Core DbContext', 'Repository Pattern'],
  messaging: ['RabbitMQ 3', 'MassTransit', 'Async event-driven notifications'],
  cache: ['Redis 7', 'Token TTL cache', 'StackExchange.Redis'],
  integrations: ['Razorpay .NET SDK', 'Twilio .NET SDK', 'SendGrid'],
  devops: ['Docker', 'Docker Compose', 'Multi-stage Dockerfiles'],
  patterns: ['Microservices', 'API Gateway', 'Saga / compensating transactions', 'HLD & LLD documentation'],
};

export const IFMS_TECH_STACK_FLAT = [
  'Angular 17',
  'Angular Material',
  'ASP.NET Core 8',
  'SQL Server 2022',
  'Ocelot',
  'Redis',
  'RabbitMQ',
  'Docker',
  'JWT',
  'BCrypt',
  'Razorpay',
  'Twilio',
  'SendGrid',
  'Clean Architecture',
  'MassTransit',
  'RxJS',
];

export const IFMS_HIGHLIGHTS = [
  '7 microservices (Identity, Inventory, Sales, Admin + Booking, Notification, Station) behind Ocelot :5000',
  'Strict DB-per-service on SQL Server — no cross-DB reads; inter-service communication via HTTP + RabbitMQ',
  'Angular 17 modules: Auth, Dashboard, Inventory, Sales, Booking, Admin with JWT interceptor',
  'Booking flow: Razorpay checkout → webhook → Redis IFM token (<50ms validation) → stock deduct + sale record',
  'Fraud engine flags abnormal volume; admin can deactivate dealers via Identity Service HTTP calls',
  'Full case study, HLD, and LLD documented — Docker Compose single-command deployment',
];

export const IFMS_DESCRIPTION =
  'Enterprise microservices platform for India\'s ~90,000 petrol stations — digitizing inventory, sales, fraud detection, prepaid fuel booking, and admin KPIs. Case study covers industry pain points (₹1,200 Cr estimated yearly fraud, ~70% manual records), layered architecture, and per-service Clean Architecture LLDs.';
