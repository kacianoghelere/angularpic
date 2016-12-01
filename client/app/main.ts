import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// importa o módulo que será carregado primeiro
import { AppModule } from './app.module'; 

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);