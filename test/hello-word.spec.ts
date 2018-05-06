import { HelloWorld } from '../src/hello-world';
import { expect } from 'chai';
import 'mocha';

describe('sayHello', () => {
  it('should return hello world', () => {
    const result = HelloWorld.sayHello();
    expect(result).to.equal('Hello World!');
  });
});

describe('sayGoodbye', () => {
  it('should return goodbye', () => {
    const result = HelloWorld.sayGoodbye();
    expect(result).to.equal('Goodbye!');
  });
});
