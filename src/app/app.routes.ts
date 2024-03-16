import { Routes } from '@angular/router';
import { NotInstalledComponent } from './not-installed/not-installed.component';
import { InstalledComponent } from './installed/installed.component';

export const routes: Routes = [
  { path: 'not-installed', component: NotInstalledComponent },
  { path: 'installed', component: InstalledComponent }
];
