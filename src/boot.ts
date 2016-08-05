import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { App } from './app/components';

bootstrap(App, [
  // ...PLATFORM_PROVIDERS,
  // ...ENV_PROVIDERS,
  // ...APP_PROVIDERS
  HTTP_PROVIDERS
])
.catch(err => console.error(err));
