Feature('Home page');

Scenario('greeting', ({ I }) => {
  I.amOnPage('/');

  I.see('Hello, world!');
});
