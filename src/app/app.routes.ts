import { Routes } from '@angular/router';
import {MainPage} from './pages/main-page/main-page';
import {ProjectInfo} from './pages/project-info/project-info';
import {ContactPage} from './pages/contact-page/contact-page';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPage },
  { path: 'projects', component: ProjectInfo },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '/home'}
];
