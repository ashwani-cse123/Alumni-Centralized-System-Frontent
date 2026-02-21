import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { createPlatform } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

export default function bootstrap(context: BootstrapContext) {
  // Angular 19 SSR requires context as 3rd argument
  return (bootstrapApplication as any)(AppComponent, config, context);
}