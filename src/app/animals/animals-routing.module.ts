import { AnimalsListResolver } from './animals-list/animals-list.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
    resolve: {
      animals: AnimalsListResolver
    }
  },
  {
    path: ':animalId',
    component: AnimalDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
