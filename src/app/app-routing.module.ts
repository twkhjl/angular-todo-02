import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TttComponent } from './ttt/ttt.component';

const routes: Routes = [
  { path: 'test', component: TttComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
