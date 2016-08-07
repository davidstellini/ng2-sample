import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, RequestOptions } from '@angular/http';
import { App } from './app/components';
import { appRouterProviders } from './app/app.routes';
import { GithubApiRequestOptions } from './app/customProviders';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PLATFORM_DIRECTIVES, provide } from '@angular/core';
import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

bootstrap(App, [
  // DIRECTIVES
  provide(PLATFORM_DIRECTIVES, {useValue: [
    ROUTER_DIRECTIVES
  ], multi: true}),

  // Global providers
  HTTP_PROVIDERS,

  // Routes
  appRouterProviders,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: RequestOptions, useClass: GithubApiRequestOptions}
])
.catch(err => console.error(err));
