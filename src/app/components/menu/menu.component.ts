import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  visible: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.visible = !this.visible
  }

}
