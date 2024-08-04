import { Request, Response } from "express";

export function addTodo (req: Request, res: Response) {
  res.send('Add todo')
}