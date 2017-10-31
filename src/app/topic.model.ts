export class Topic {
  constructor(
    public tilte: string,
    public link: string,
    public id: number,
    public comment: Comment[] = []
  ) {}
}
