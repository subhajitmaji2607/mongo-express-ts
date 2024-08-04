import express from "express";
import { addTodo } from "../controller";

const todoRouter = express.Router()

todoRouter.get('/add', addTodo)

export default todoRouter;