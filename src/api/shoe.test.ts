// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import express from '../app';
import { resetDBForTest } from '../utils/resetDB';

const app = supertest(express);

beforeEach(async (done) => { await resetDBForTest(); done();});

describe('GET all shoes', () => {
  it('gets all shoes', async () => {
    const response = await app.get('/shoe');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with brand of nike', async () => {
    const response = await app
      .get('/shoe?brand=nike');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with style of basketball', async () => {
    const response = await app
      .get('/shoe?style=basketball');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with brand of nike and style of basketball', async () => {
    const response = await app
      .get('/shoe?brand=nike&style=basketball');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with section of mens', async () => {
    const response = await app
      .get('/shoe?section=mens');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with collection of hypes', async () => {
    const response = await app
      .get('/shoe?collection=hypes');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with section of mens and collection of hypes', async () => {
    const response = await app
      .get('/shoe?section=mens&collection=hypes');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with stars over 3', async () => {
    const response = await app
      .get('/shoe?stars=3');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with brand nike and stars over 3', async () => {
    const response = await app
      .get('/shoe?brand=nike&stars=3');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with non existent brand', async () => {
    const response = await app
      .get('/shoe?brand=notAShoeBrand');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });
});

describe('GET single shoe', () => {
  it('get shoe with id 1', async () => {
    const response = await app
      .get('/shoe/1');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('get shoe with id 2', async () => {
    const response = await app
      .get('/shoe/2');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('get shoe with id 3', async () => {
    const response = await app
      .get('/shoe/3');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it("get shoe with id 4 (doesn't exist)", async () => {
    const response = await app
      .get('/shoe/4');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });
});

describe('Post add shoe', () => {

  it('no data', async () => {
    const response = await app
      .post('/shoe');

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('perfect amount of data', async () => {
    const addData = await app
      .post('/shoe')
      .type('json')
      .send(JSON.stringify({
        name: 'test shoe',
        description: 'runs fast',
        price: 50,
        releaseDate: 29456887,
        BrandID: 2,
        StyleID: 1,
        SectionID: 1,
        CollectionID: 1,
        CoverImage: 1,
      }))

    const addDataJson = JSON.parse(addData.text);

    expect(addDataJson).toMatchSnapshot();

    const getShoe = await app
      .get('/shoe?name=test%20shoe')

    const getShoeJson = JSON.parse(getShoe.text);

    expect(getShoeJson).toMatchSnapshot();
  });

  it('no cover image', async () => {
    const addData = await app
      .post('/shoe')
      .type('json')
      .send(JSON.stringify({
        name: 'test shoe',
        description: 'runs fast',
        price: 50,
        releaseDate: 29456887,
        BrandID: 2,
        StyleID: 1,
        SectionID: 1,
        CollectionID: 1,
      }))

    const addDataJson = JSON.parse(addData.text);

    expect(addDataJson).toMatchSnapshot();

    const getShoe = await app
      .get('/shoe?name=test%20shoe')

    const getShoeJson = JSON.parse(getShoe.text);

    expect(getShoeJson).toMatchSnapshot();
  });
});