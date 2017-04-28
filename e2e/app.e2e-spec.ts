import { Mandatory2TodoAppPage } from './app.po';

describe('mandatory2-todo-app App', () => {
  let page: Mandatory2TodoAppPage;

  beforeEach(() => {
    page = new Mandatory2TodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
