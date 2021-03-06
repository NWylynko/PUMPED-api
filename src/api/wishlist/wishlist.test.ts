// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import express from '../../app';
import { resetDBForTest } from '../../utils/resetDB';

const app = supertest(express);

beforeEach(async (done) => { await resetDBForTest(); done(); });

describe('GET wishlist', () => {
  [1, 2, 3, 4].forEach((id) => {
    it(`get shoes for customer ${id}`, async () => {
      const response = await app.get(`/wishlist/${id}`);

      expect(response.status).toMatchSnapshot();

      const json = JSON.parse(response.text);

      expect(json).toMatchSnapshot();
    });
  });
});

describe('POST wishlist', () => {
  [1, 2, 3].forEach((CustomerID) => {
    [1, 2, 3].forEach((ShoeID) => {
      it(`add shoe (${ShoeID}) to customer (${CustomerID})`, async () => {
        const response = await app
          .post(`/wishlist/${CustomerID}/${ShoeID}`);

        expect(response.status).toMatchSnapshot();

        const json = JSON.parse(response.text);

        expect(json).toMatchSnapshot();

        const getWishlist = await app
          .get(encodeURI(`/wishlist/${CustomerID}`));

        expect(getWishlist.status).toMatchSnapshot();

        const getWishlistJson = JSON.parse(getWishlist.text);

        expect(getWishlistJson).toMatchSnapshot();
      });
    });
  });
});

describe('DELETE wishlist item', () => {
  [1, 2].forEach((CustomerID) => {
    [1, 2].forEach((ShoeID) => {
      it(`remove shoe (${ShoeID}) to customer (${CustomerID})`, async () => {
        const response = await app
          .delete(`/wishlist/${CustomerID}/${ShoeID}`);

        expect(response.status).toMatchSnapshot();

        const json = JSON.parse(response.text);

        expect(json).toMatchSnapshot();

        const getWishlist = await app
          .get(encodeURI(`/wishlist/${CustomerID}`));

        expect(getWishlist.status).toMatchSnapshot();

        const getWishlistJson = JSON.parse(getWishlist.text);

        expect(getWishlistJson).toMatchSnapshot();
      });
    });
  });
});

describe('DELETE wishlist', () => {
  [1, 2, 3].forEach((CustomerID) => {
    it(`clear wishlist of customer (${CustomerID})`, async () => {
      const response = await app
        .delete(`/wishlist/${CustomerID}`);

      expect(response.status).toMatchSnapshot();

      const json = JSON.parse(response.text);

      expect(json).toMatchSnapshot();

      const getWishlist = await app
        .get(encodeURI(`/wishlist/${CustomerID}`));

      expect(getWishlist.status).toMatchSnapshot();

      const getWishlistJson = JSON.parse(getWishlist.text);

      expect(getWishlistJson).toMatchSnapshot();
    });
  });
});
