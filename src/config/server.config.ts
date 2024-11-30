import express, { Request, Response , Application } from 'express';
import routes from "../routes/index.ts";
import { httpLogger } from "../middleware/httpLogger.ts";
import { customizeConsoleLog } from './console.log.config.ts';

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to Express & TypeScript Server.`);
});

//Add customize color in console
customizeConsoleLog();

//Register middleware to log all incoming requests.
app.use(httpLogger);

//Register all application routes
app.use('/api', routes);

export default app;
