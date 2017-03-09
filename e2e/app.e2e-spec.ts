import { BpeToolPage } from './app.po';

describe('bpe-tool App', () => {
  let page: BpeToolPage;

  beforeEach(() => {
    page = new BpeToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
