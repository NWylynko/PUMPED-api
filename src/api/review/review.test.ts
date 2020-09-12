// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import express from '../../app';
import { resetDBForTest } from '../../utils/resetDB';

const app = supertest(express);

beforeEach(async (done) => { await resetDBForTest(); done(); });

describe('GET Review of Shoe', () => {
  [1, 2, 3].forEach(async (ShoeID) => {
    it(`gets reviews for ShoeID (${ShoeID})`, async () => {
      const response = await app.get(encodeURI(`/review/${ShoeID}`));

      expect(response.status).toMatchSnapshot();

      const json = JSON.parse(response.text);

      expect(json).toMatchSnapshot();
    });
  });
});

describe('POST Review of Shoe', () => {
  it('add review with no data (should error)', async () => {
    const review = {};

    const addReview = await app
      .post('/review/1/1')
      .type('json')
      .send(JSON.stringify(review));

    expect(addReview.status).toMatchSnapshot();

    const addReviewJson = JSON.parse(addReview.text);

    expect({ error: addReviewJson.error, message: addReviewJson.message }).toMatchSnapshot();

    const getReview = await app
      .get('/review/1');

    expect(getReview.status).toMatchSnapshot();

    const getReviewJson = JSON.parse(getReview.text);

    expect(getReviewJson).toMatchSnapshot();
  });

  it('add review from customer who already left a review (should error)', async () => {
    const review = {
      stars: 2,
      message: 'baddd',
      timestamp: 309458,
    };

    const addReview = await app
      .post('/review/1/1')
      .type('json')
      .send(JSON.stringify(review));

    expect(addReview.status).toMatchSnapshot();

    const addReviewJson = JSON.parse(addReview.text);

    expect(addReviewJson).toMatchSnapshot();

    const getReview = await app
      .get('/review/1');

    expect(getReview.status).toMatchSnapshot();

    const getReviewJson = JSON.parse(getReview.text);

    expect(getReviewJson).toMatchSnapshot();
  });

  it('add review (should work)', async () => {
    const review = {
      stars: 4,
      message: 'nice',
      timestamp: 3456745367,
    };

    const addReview = await app
      .post('/review/3/3')
      .type('json')
      .send(JSON.stringify(review));

    expect(addReview.status).toMatchSnapshot();

    const addReviewJson = JSON.parse(addReview.text);

    expect(addReviewJson).toMatchSnapshot();

    const getReview = await app
      .get('/review/3');

    expect(getReview.status).toMatchSnapshot();

    const getReviewJson = JSON.parse(getReview.text);

    expect(getReviewJson).toMatchSnapshot();
  });
});

describe('PATCH (update) Review of Shoe', () => {
  it('update review with no data (should error)', async () => {
    const reviewDetails = {};

    const updateReview = await app
      .patch('/review/1/1')
      .type('json')
      .send(JSON.stringify(reviewDetails));

    expect(updateReview.status).toMatchSnapshot();

    const updateReviewJson = JSON.parse(updateReview.text);

    expect({ error: updateReviewJson.error, message: updateReviewJson.message }).toMatchSnapshot();

    const getReview = await app
      .get('/review/1');

    expect(getReview.status).toMatchSnapshot();

    const getReviewJson = JSON.parse(getReview.text);

    expect(getReviewJson).toMatchSnapshot();
  });

  it("update review that doesn't exist (should error)", async () => {
    const reviewDetails = {
      stars: 2,
      message: 'baddd',
      timestamp: 309458,
    };

    const updateReview = await app
      .patch('/review/1/8')
      .type('json')
      .send(JSON.stringify(reviewDetails));

    expect(updateReview.status).toMatchSnapshot();

    const updateReviewJson = JSON.parse(updateReview.text);

    expect(updateReviewJson).toMatchSnapshot();

    const getReview = await app
      .get('/review/1');

    expect(getReview.status).toMatchSnapshot();

    const getReviewJson = JSON.parse(getReview.text);

    expect(getReviewJson).toMatchSnapshot();
  });

  it('add review (should work)', async () => {
    const reviewDetails = {
      stars: 4,
      message: 'nice',
      timestamp: 3456745367,
    };

    const addReview = await app
      .patch('/review/3/1')
      .type('json')
      .send(JSON.stringify(reviewDetails));

    expect(addReview.status).toMatchSnapshot();

    const addReviewJson = JSON.parse(addReview.text);

    expect(addReviewJson).toMatchSnapshot();

    const getReview = await app
      .get('/review/3');

    expect(getReview.status).toMatchSnapshot();

    const getReviewJson = JSON.parse(getReview.text);

    expect(getReviewJson).toMatchSnapshot();
  });
});

describe('DELETE (remove) Review of Shoe', () => {
  it('remove review (should work)', async () => {
    const removeReview = await app
      .delete('/review/1/1');

    expect(removeReview.status).toMatchSnapshot();

    const removeReviewJson = JSON.parse(removeReview.text);

    expect(removeReviewJson).toMatchSnapshot();

    const getReview = await app
      .get('/review/1');

    expect(getReview.status).toMatchSnapshot();

    const getReviewJson = JSON.parse(getReview.text);

    expect(getReviewJson).toMatchSnapshot();
  });
});
