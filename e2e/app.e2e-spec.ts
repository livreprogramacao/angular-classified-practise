import { AngularClassifiedPractisePage } from './app.po';

describe('angular-classified-practise App', () => {
  let page: AngularClassifiedPractisePage;

  beforeEach(() => {
    page = new AngularClassifiedPractisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
