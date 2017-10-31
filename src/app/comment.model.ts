export class Comment {
  constructor(
    public author: string,
    public comment: string,
    public comments: Comment[] = []
  ) {}
}
