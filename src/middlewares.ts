import { Request, Response, NextFunction } from 'express';
import path from 'path';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

const baseDir = path.join(__dirname, '../');

const cleanUpStack = (dirtyStack: string) => {
  const x = dirtyStack.replace(/ {4}at /g, '').split('\n');
  x.shift();
  return x.map((value) => value.replace(baseDir, ''));
};

/* eslint-disable no-unused-vars */
export function errorHandler(err: Error | string, req: Request, res: Response, next: NextFunction) {
  /* eslint-enable no-unused-vars */

  let error: Error;

  if (typeof err === 'string') {
    error = new Error(err);
  } else {
    error = err;
  }

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    error: true,
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : cleanUpStack(error.stack || ''),
  });
}

export default {
  notFound,
  errorHandler,
};
