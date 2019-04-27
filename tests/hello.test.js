const { sayHello } = require('../src/index')

test('this is a test', () => {
    expect(sayHello()).toBe('hello')
})