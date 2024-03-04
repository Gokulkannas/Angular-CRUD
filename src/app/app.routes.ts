import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: CrudComponent },
  { path: 'list', title: 'List', component: ListComponent },
  { path: 'update/:id', title: 'UpdateData', component: UpdateComponent },
];
