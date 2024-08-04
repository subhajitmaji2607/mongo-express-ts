import { Router } from 'express';
import todoRouter from "../todoService/routes";

const router = Router();

// Register the user router with different paths
router.use('/todo', todoRouter);

export default router;


