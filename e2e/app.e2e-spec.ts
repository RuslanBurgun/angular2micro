import { MyauthPage } from './app.po';

describe('myauth App', function() {
  let page: MyauthPage;

  beforeEach(() => {
    page = new MyauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
