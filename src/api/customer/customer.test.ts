// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import express from '../../app';
import { resetDBForTest } from '../../utils/resetDB';

const app = supertest(express);

beforeEach(async (done) => {
  await resetDBForTest();
  done();
});

describe('GET Customer', () => {
  [1, 2, 3, 4].forEach(async (CustomerID) => {
    it(`gets Customer for ID (${CustomerID})`, async () => {
      const response = await app.get(encodeURI(`/customer/${CustomerID}`));

      expect(response.status).toMatchSnapshot();

      const json = JSON.parse(response.text);

      expect(json).toMatchSnapshot();
    });
  });
});

describe('POST add a new Customer', () => {
  it('no data', async () => {
    const customer = {};

    const addCustomer = await app
      .post('/customer/')
      .type('json')
      .send(JSON.stringify(customer));

    expect(addCustomer.status).toMatchSnapshot();

    const addCustomerJson = JSON.parse(addCustomer.text);

    expect(addCustomerJson).toMatchSnapshot();

    const getCustomer = await app.get('/customer/4');

    expect(getCustomer.status).toMatchSnapshot();

    const getCustomerJson = JSON.parse(getCustomer.text);

    expect(getCustomerJson).toMatchSnapshot();
  });

  it('not enough data', async () => {
    const customer = {
      firstName: 'jacky',
    };

    const addCustomer = await app
      .post('/customer/')
      .type('json')
      .send(JSON.stringify(customer));

    expect(addCustomer.status).toMatchSnapshot();

    const addCustomerJson = JSON.parse(addCustomer.text);

    expect(addCustomerJson).toMatchSnapshot();

    const getCustomer = await app.get('/customer/4');

    expect(getCustomer.status).toMatchSnapshot();

    const getCustomerJson = JSON.parse(getCustomer.text);

    expect(getCustomerJson).toMatchSnapshot();
  });

  it('correct amount of data', async () => {
    const customer = {
      firstName: 'big',
      lastName: 'lad',
    };

    const addCustomer = await app
      .post('/customer/')
      .type('json')
      .send(JSON.stringify(customer));

    expect(addCustomer.status).toMatchSnapshot();

    const addCustomerJson = JSON.parse(addCustomer.text);

    expect(addCustomerJson).toMatchSnapshot();

    const getCustomer = await app.get('/customer/4');

    expect(getCustomer.status).toMatchSnapshot();

    const getCustomerJson = JSON.parse(getCustomer.text);

    expect(getCustomerJson).toMatchSnapshot();
  });
});

describe('PATCH update a Customer', () => {
  const customers = [1, 4]; // registers customer and non existent customer

  const customerData = [
    { name: 'no data', data: {} },
    {
      name: 'only one field',
      data: {
        firstName: 'jacky',
      },
    },
    {
      name: 'all fields',
      data: {
        firstName: 'big',
        lastName: 'lad',
      },
    },
  ];

  customers.forEach((customerID) => {
    customerData.forEach(({ name, data }) => {
      it(`${customerID === 1 ? '' : 'no '}customer, ${name}`, async () => {
        const updateCustomer = await app
          .patch(`/customer/${customerID}`)
          .type('json')
          .send(JSON.stringify(data));

        expect(updateCustomer.status).toMatchSnapshot();

        const updateCustomerJson = JSON.parse(updateCustomer.text);

        expect(updateCustomerJson).toMatchSnapshot();

        const getCustomer = await app.get(`/customer/${customerID}`);

        expect(getCustomer.status).toMatchSnapshot();

        const getCustomerJson = JSON.parse(getCustomer.text);

        expect(getCustomerJson).toMatchSnapshot();
      });
    });
  });
});

describe('DELETE remove a Customer', () => {
  [1, 2, 3, 4].forEach(async (CustomerID) => {
    it(`removes Customer for ID (${CustomerID})`, async () => {
      const response = await app.delete(encodeURI(`/customer/${CustomerID}`));

      expect(response.status).toMatchSnapshot();

      const json = JSON.parse(response.text);

      expect(json).toMatchSnapshot();

      const getCustomer = await app.get(`/customer/${CustomerID}`);

      expect(getCustomer.status).toMatchSnapshot();

      const getCustomerJson = JSON.parse(getCustomer.text);

      expect(getCustomerJson).toMatchSnapshot();
    });
  });
});
