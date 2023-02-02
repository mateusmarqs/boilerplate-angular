import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comments } from './comment';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.searchComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(100)],
    });
  }

  saveComment(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentsService.saveComment(this.id, comment).pipe(
      switchMap(() => this.commentsService.searchComment(this.id)),
      tap(() => {
        this.commentForm.reset()
        console.log('Comentário Salvo')
      })
    );
  }
}
