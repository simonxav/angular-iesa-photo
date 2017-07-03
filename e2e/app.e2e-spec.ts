import { FacialPage } from './app.po';

describe('facial App', () => {
  let page: FacialPage;

  beforeEach(() => {
    page = new FacialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
