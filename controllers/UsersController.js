import dbClient from '../utils/db';
import hashPassword from '../utils/redis';

class UserController {
  static async postNew (req, resp) {
    const { email, password } = req.body;
    if (!email) {
      return resp.status(400).json({ error: 'Missing email' });
    }
    if (!password) {
      return resp.status(400).json({ error: 'Missing password' });
    }
    const user = await dbClient.db.collection('users').findOne({ email });
    if (user) {
      return resp.status(400).json({ error: 'Already exist' });
    }
    const newUser = {
      email,
      password: hashPassword(password)
    };
    await dbClient.db.collection('users').insertOne(newUser);
    return resp.status(201).json({
      id: newUser._id,
      email
    });
  }
}
export default UserController;
