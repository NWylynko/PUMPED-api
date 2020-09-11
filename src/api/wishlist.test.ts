// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import express from '../app';
import { resetDBForTest } from '../utils/resetDB';

const app = supertest(express);

beforeEach(async (done) => { await resetDBForTest(); done(); });

describe('GET wishlist', () => {
  [1, 2, 3].forEach(id => {
    it(`get shoes for customer ${id}`, async () => {
      const response = await app.get(`/wishlist/${id}`);
  
      const json = JSON.parse(response.text);
  
      expect(json).toMatchSnapshot();
    })
  })

})