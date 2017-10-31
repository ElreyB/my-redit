import { MyReditPage } from './app.po';

describe('my-redit App', () => {
  let page: MyReditPage;

  beforeEach(() => {
    page = new MyReditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
