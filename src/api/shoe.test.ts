// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import express from '../app';
import { resetDBForTest } from '../utils/resetDB';

const app = supertest(express);

beforeEach(async (done) => { await resetDBForTest(); done(); });

describe('GET all shoes', () => {
  it('gets all shoes', async () => {
    const response = await app.get('/shoe');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with brand of nike', async () => {
    const response = await app
      .get('/shoe?brand=nike');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with style of basketball', async () => {
    const response = await app
      .get('/shoe?style=basketball');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with brand of nike and style of basketball', async () => {
    const response = await app
      .get('/shoe?brand=nike&style=basketball');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with section of mens', async () => {
    const response = await app
      .get('/shoe?section=mens');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with collection of hypes', async () => {
    const response = await app
      .get('/shoe?collection=hypes');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with section of mens and collection of hypes', async () => {
    const response = await app
      .get('/shoe?section=mens&collection=hypes');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with stars over 3', async () => {
    const response = await app
      .get('/shoe?stars=3');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with brand nike and stars over 3', async () => {
    const response = await app
      .get('/shoe?brand=nike&stars=3');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });

  it('with non existent brand', async () => {
    const response = await app
      .get('/shoe?brand=notAShoeBrand');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();
  });
});

describe('GET single shoe', () => {
  [1, 2, 3, 4].forEach((id) => {
    it(`get shoe with id ${id}`, async () => {
      const response = await app
        .get(`/shoe/${id}`);

      expect(response.status).toMatchSnapshot();

      const json = JSON.parse(response.text);

      expect(json).toMatchSnapshot();
    });
  });
});

describe('Post add shoe', () => {
  it('no data', async () => {
    const response = await app
      .post('/shoe');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect({ error: json.error, message: json.message }).toMatchSnapshot();
  });

  it('perfect amount of data', async () => {
    const shoe = {
      name: 'test shoe',
      description: 'runs fast',
      price: 50,
      releaseDate: 29456887,
      BrandID: 2,
      StyleID: 1,
      SectionID: 1,
      CollectionID: 1,
      CoverImage: 1,
    };

    const addData = await app
      .post('/shoe')
      .type('json')
      .send(JSON.stringify(shoe));

    expect(addData.status).toMatchSnapshot();

    const addDataJson = JSON.parse(addData.text);

    expect(addDataJson).toMatchSnapshot();

    const getShoe = await app
      .get(encodeURI(`/shoe?name=${shoe.name}`));

    expect(getShoe.status).toMatchSnapshot();

    const getShoeJson = JSON.parse(getShoe.text);

    expect(getShoeJson).toMatchSnapshot();
  });

  it('no cover image', async () => {
    const shoe = {
      name: 'test shoe',
      description: 'runs fast',
      price: 50,
      releaseDate: 29456887,
      BrandID: 2,
      StyleID: 1,
      SectionID: 1,
      CollectionID: 1,
    };

    const addData = await app
      .post('/shoe')
      .type('json')
      .send(JSON.stringify(shoe));

    expect(addData.status).toMatchSnapshot();

    const addDataJson = JSON.parse(addData.text);

    expect(addDataJson).toMatchSnapshot();

    const getShoe = await app
      .get(encodeURI(`/shoe?name=${shoe.name}`));

    expect(getShoe.status).toMatchSnapshot();

    const getShoeJson = JSON.parse(getShoe.text);

    expect(getShoeJson).toMatchSnapshot();
  });
});

describe('PATCH (update) a shoe', () => {
  it('no data', async () => {
    const response = await app
      .patch('/shoe/1');

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect({ error: json.error, message: json.message }).toMatchSnapshot();
  });

  it('1 item updated', async () => {
    const shoe = {
      name: 'fly kicks',
    };

    const ID = 1;

    const updateData = await app
      .patch(`/shoe/${ID}`)
      .type('json')
      .send(JSON.stringify(shoe));

    expect(updateData.status).toMatchSnapshot();

    const updateDataJson = JSON.parse(updateData.text);

    expect(updateDataJson).toMatchSnapshot();

    const getShoe = await app
      .get(encodeURI(`/shoe/${ID}`));

    expect(getShoe.status).toMatchSnapshot();

    const getShoeJson = JSON.parse(getShoe.text);

    expect(getShoeJson).toMatchSnapshot();
  });

  it('3 items updated', async () => {
    const shoe = {
      name: 'test shoe',
      description: 'runs fast',
      price: 50,
    };

    const ID = 3;

    const updateData = await app
      .patch(`/shoe/${ID}`)
      .type('json')
      .send(JSON.stringify(shoe));

    expect(updateData.status).toMatchSnapshot();

    const updateDataJson = JSON.parse(updateData.text);

    expect(updateDataJson).toMatchSnapshot();

    const getShoe = await app
      .get(encodeURI(`/shoe/${ID}`));

    expect(getShoe.status).toMatchSnapshot();

    const getShoeJson = JSON.parse(getShoe.text);

    expect(getShoeJson).toMatchSnapshot();
  });
});

describe('DELETE a shoe', () => {
  it('remove a shoe', async () => {
    const ID = 1;

    const response = await app
      .delete(encodeURI(`/shoe/${ID}`));

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();

    const getShoe = await app
      .get(encodeURI(`/shoe/${ID}`));

    expect(getShoe.status).toMatchSnapshot();

    const getShoeJson = JSON.parse(getShoe.text);

    expect(getShoeJson).toMatchSnapshot();
  });

  it('remove a non existent shoe', async () => {
    const ID = 4;

    const response = await app
      .delete(`/shoe/${ID}`);

    expect(response.status).toMatchSnapshot();

    const json = JSON.parse(response.text);

    expect(json).toMatchSnapshot();

    const getShoe = await app
      .get(encodeURI(`/shoe/${ID}`));

    expect(getShoe.status).toMatchSnapshot();

    const getShoeJson = JSON.parse(getShoe.text);

    expect(getShoeJson).toMatchSnapshot();
  });
});
