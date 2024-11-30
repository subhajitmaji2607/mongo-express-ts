import Server from './config/server.config'
import ENVIRONMENT_CONFIG from './config/environment.config.ts';

const PORT = ENVIRONMENT_CONFIG.APP_PORT;

Server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});