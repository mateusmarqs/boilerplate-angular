import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/authentication/user/user';
import { UserService } from 'src/app/authentication/user/user.service';
import { Animals } from '../animal';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
  animals$ !: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.getUser().pipe(
      switchMap((user: User) => {
        const userName = user.name ?? ''
        return this.animalsService.userListPhotos(userName)
      })
    )
    // this.userService.getUser().subscribe((user: User) => {
    //   const userName = user.name ?? ''
    //   this.animalsService.userListPhotos(userName).subscribe((animals: Animals) => {
    //     this.animals = animals
    //   })
    // })
  }
}
