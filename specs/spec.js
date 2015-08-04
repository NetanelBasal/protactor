describe('Protractor Demo App', function() {
  it('should have a title', function() {

    browser.get('http://localhost:8080/');

    expect(browser.getTitle()).toEqual('Protactor');
  });

  it('should be text protactor', function() {

    var name = element(by.binding('main.name'));
    expect(name.getText()).toBe('protactor');

  });

  it('should be 2', function() {
    var secondLi = element(by.repeater('num in main.nums').row(1));

    expect(secondLi.getText()).toEqual("2");
  });

  it('should be in the page', function () {
    var h1 = element(by.css('h1'));
    expect(h1.isPresent()).toBe(true);
  });

  it('expectation', function() {
     element.all(by.repeater('cat in main.pets').column('cat.age')).then(function(ages) {

    expect(ages[0].getText()).toEqual("22");
    })
  });
});