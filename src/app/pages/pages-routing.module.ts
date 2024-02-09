import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
 { path: '',
  component: PagesComponent,
  children:[
    {
      path: 'book',
      loadChildren: () =>
        import('../pages/book/book.module').then((m) => m.BookModule)
    },
  ]}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
