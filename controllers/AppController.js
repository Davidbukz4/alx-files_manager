import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  static getStatus (req, resp) {
    if (redisClient.isAlive() && dbClient.isAlive()) {
      resp.json({ redis: true, db: true });
      res.end();
    }
  }

  static async getStats (req, resp) {
    const stats = {
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles()
    };
    return resp.status(200).send(stats);
  }
}
module.exports = AppController;
