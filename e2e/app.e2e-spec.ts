import { TwitterstreamsPage } from './app.po';

describe('twitterstreams App', () => {
  let page: TwitterstreamsPage;

  beforeEach(() => {
    page = new TwitterstreamsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
