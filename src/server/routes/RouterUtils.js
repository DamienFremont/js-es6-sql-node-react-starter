import { Router } from 'express';
import path from 'path';

class RouterUtils {

  static createStaticsRouter(basePath) {
    const router = Router();
    const publicPath = path.join(__dirname, basePath, 'build');
    router.all('/*', (req, res, next) => {
      // logger.log('info', 'Reading the main route through http request, sending index.html');
      res.sendFile(path.join(publicPath, 'index.html'))
    })
    return router;
  }

}
export default RouterUtils;