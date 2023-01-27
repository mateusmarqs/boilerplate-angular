import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animal';

@Component({
  selector: 'app-grid-photos',
  templateUrl: './grid-photos.component.html',
  styleUrls: ['./grid-photos.component.scss']
})
export class GridPhotosComponent implements OnInit {

  // Verificar isso
  @Input() animals !: Animals

  constructor() { }

  ngOnInit(): void {
  }

}
