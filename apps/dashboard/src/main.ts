import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // This will now find the file you just created

bootstrapApplication(App, appConfig).catch((err) => console.error(err));