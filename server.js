import router from './routes';

const express = require('express');

const PORT = process.env.PORT || '5000';

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
export default app;
