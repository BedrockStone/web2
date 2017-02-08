import { Routes } from '@angular/router';
import { PicasaComponent } from './picasa';
import { LandingComponent } from './landing';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'albums', component: PicasaComponent},
  { path: 'album/:albumId', component: PicasaComponent},
  { path: '**',    component: NoContentComponent },
];
