import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { appRoutes } from './app.routes'; 
// Ensure this path is exactly './auth/auth.interceptor' as seen in your tree
import { authInterceptor } from './auth/auth.interceptor'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
  ],
};