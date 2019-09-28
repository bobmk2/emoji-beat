import express from 'express';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';

const app = express();

app.use(helmet());

const limiter = new RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.get('*', (_, res) => {
  res.status(200).send({ unixtime: Math.floor(new Date().getTime() / 1000) });
});

export default app;
