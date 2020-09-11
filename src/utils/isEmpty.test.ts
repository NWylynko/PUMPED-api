import { isArrayEmpty, isEmpty } from './isEmpty';

describe('array', () => {
  it('is empty', () => {
    const array: any[] = [];

    expect(isArrayEmpty(array)).toMatchSnapshot();
  });
  it('it is not empty', () => {
    const array: any[] = ['test'];

    expect(isArrayEmpty(array)).toMatchSnapshot();
  });
});

describe('object', () => {
  it('is empty', () => {
    const object: any = null;

    expect(isEmpty(object)).toMatchSnapshot();
  });
  it('it is not empty', () => {
    const object: any = {
      not: 'empty',
    };

    expect(isEmpty(object)).toMatchSnapshot();
  });
});
