import { provideRouter, RouterConfig } from '@angular/router';
import { App } from './components';
import { aboutMeRoutes, experienceRoutes } from './components';

export const routes: RouterConfig = [
  { path: '', redirectTo : '/about-me', terminal : true },
  ...aboutMeRoutes,
  ...experienceRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
