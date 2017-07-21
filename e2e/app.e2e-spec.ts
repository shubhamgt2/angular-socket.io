import { AngularSocketPage } from './app.po';

describe('angular-socket App', () => {
  let page: AngularSocketPage;

  beforeEach(() => {
    page = new AngularSocketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
