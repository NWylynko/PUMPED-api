import objectToSQLupdate from './objectToSQLupdate';

it('is empty', () => {
  const object = {
    test: 'value',
    nice: 'easy',
    easy: 'peazy lemon squeezy',
  };

  expect(objectToSQLupdate(object)).toMatchSnapshot();
});
