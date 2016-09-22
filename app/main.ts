import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
console.log('test 4 logging...');
platform.bootstrapModule(AppModule);
