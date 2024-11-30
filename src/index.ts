import Server from './config/server.config'
import ENVIRONMENT_CONFIG from './config/environment.config.ts';
import { Application } from 'express';

const PORT = ENVIRONMENT_CONFIG.APP_PORT;

(Server as Application).listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});