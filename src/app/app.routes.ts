import { provideRouter, RouterConfig } from '@angular/router';
import { App } from './components';
import { aboutUsRoutes, experienceRoutes } from './components';

export const routes: RouterConfig = [
  { path: '', redirectTo : '/about-us', terminal : true },
  ...aboutUsRoutes,
  ...experienceRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
