import { Request } from 'express';

const getCustomerID = (req: Request): string => {
  const CustomerID = req.header('CustomerID');

  if (!CustomerID) {
    throw new Error('no customer id supplied');
  }

  return CustomerID;
};

export default getCustomerID;
