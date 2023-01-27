import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    GridPhotosComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
  ]
})
export class AnimalsModule { }
