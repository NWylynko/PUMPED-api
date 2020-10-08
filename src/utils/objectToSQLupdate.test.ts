import objectToSQLupdate from './objectToSQLupdate';

it('is empty', () => {
  const object = {
    test: 'value',
    nice: 'easy',
  };

  expect(objectToSQLupdate(object)).toMatchSnapshot();
});
