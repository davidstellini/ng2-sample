import { RouterConfig } from '@angular/router';
import { App } from './components';

export const routes: RouterConfig = [
  { path: '',      component: App },
  { path: 'app',  component: App }
];
