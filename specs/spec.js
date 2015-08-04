describe('Protractor Demo App', function() {
  it('should have a title', function() {

    browser.get('https://reskill.me');

    expect(browser.getTitle()).toEqual('ReSkill - Become the talent that employers are searching for');
  });

  // it('should be text protactor', function() {

  //   var name = element(by.binding('main.name'));
  //   expect(name.getText()).toBe('protactor');

  // });

  // it('should be 2', function() {
  //   var secondLi = element(by.repeater('num in main.nums').row(1));

  //   expect(secondLi.getText()).toEqual("2");
  // });

  it('should be in the page', function () {
    var h1 = element(by.buttonText('How It Works'));
    expect(h1.isPresent()).toBe(true);
  });

  // it('expectation', function() {
  //    element.all(by.repeater('cat in main.pets').column('cat.age')).then(function(ages) {

  //   expect(ages[0].getText()).toEqual("22");
  //   })
  // });
});