export interface Comment {
  date: Date;
  text: string;
  username: string;
}

export type Comments = Array<Comment>;
