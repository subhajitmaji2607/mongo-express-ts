import express, { Request, Response , Application } from 'express';
import ENVIRONMENT_CONFIG from './config/environment.config.ts';
import routes from "./routes";

const app: Application = express();
const PORT = ENVIRONMENT_CONFIG.APP_PORT;

app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to Express & TypeScript Server.`);
});

//Register all application routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});