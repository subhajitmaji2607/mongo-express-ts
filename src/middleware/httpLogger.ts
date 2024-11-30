import { NextFunction, Request, Response } from "express";

export const httpLogger = (req: Request, res: Response, next: NextFunction) => {
  console.info(`INFO: [${new Date().toISOString()}] ${req.method} ${req.url}`);
  next()
}