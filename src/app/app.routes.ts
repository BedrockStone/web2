import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { PicasaComponent } from './picasa';

import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: PicasaComponent },
  { path: '**',    component: NoContentComponent },
];
