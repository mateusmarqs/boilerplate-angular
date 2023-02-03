import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../components/alert/alert.module';
import { NewAnimalComponent } from './new-animal/new-animal.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    GridPhotosComponent,
    AnimalDetailComponent,
    CommentsComponent,
    NewAnimalComponent,

  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    ReactiveFormsModule,
    AlertModule
  ]
})
export class AnimalsModule { }
