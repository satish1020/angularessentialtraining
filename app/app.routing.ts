import { Routes, RouterModule } from '@angular/router';

import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';
import { createcustomercomponent } from './createcustomer.component';
const appRoutes: Routes = [
  { path: 'addition', component: MediaItemFormComponent },
  { path: ':medium', component: MediaItemListComponent },
  {path: 'creation',component: createcustomercomponent},
  { path: '', pathMatch: 'full', redirectTo: 'all' },
  
];

export const routing = RouterModule.forRoot(appRoutes);
