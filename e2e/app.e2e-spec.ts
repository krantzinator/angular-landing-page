import { LandingPagePage } from './app.po';

describe('landing-page App', () => {
  let page: LandingPagePage;

  beforeEach(() => {
    page = new LandingPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
