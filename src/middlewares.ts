import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { SQLError } from './db';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

const baseDir = path.join(__dirname, '../');

const cleanUpStack = (dirtyStack: string) => {
  if (dirtyStack) {
    const x = dirtyStack.replace(/ {4}at /g, '').split('\n');
    x.shift();
    return x.map((value) => value.replace(baseDir, ''));
  }
  return '';
};

/* eslint-disable no-unused-vars */
export function errorHandler(
  err: Error | SQLError | string,
  req: Request, res: Response,
  next: NextFunction,
) {
  /* eslint-enable no-unused-vars */

  let error: Error | SQLError;

  if (typeof err === 'string') {
    error = new Error(err);
  } else {
    error = err;
  }

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  let stack;

  switch (process.env.NODE_ENV) {
    case ('production'):
      stack = '🥞';
      break;
    case ('test'):
      stack = undefined;
      break;
    default:
      if (error?.stack) {
        stack = cleanUpStack(error.stack);
      }
      break;
  }

  res.json({
    ...error,
    message: error.message,
    error: true,
    stack,
  });
}

export function requireJsonBody(req: Request, res: Response, next: NextFunction) {
  if (Object.keys(req.body).length === 0) {
    next('no data sent');
  }
  next();
}

export default {
  notFound,
  errorHandler,
  requireJsonBody,
};
