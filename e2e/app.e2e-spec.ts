import { AssassmentPage } from './app.po';

describe('assassment App', () => {
  let page: AssassmentPage;

  beforeEach(() => {
    page = new AssassmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
