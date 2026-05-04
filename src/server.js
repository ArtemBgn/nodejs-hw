import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

const port = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  pino({
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname',
      messageFormat:
        '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
      hideObject: true,
    },
  }),
);

/*
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello first home work!' });
  console.log('ok');
});*/

app.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
  console.log('first request /notes');
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
  console.log('second request /notes/noteId');
});

app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

app.use((error, req, res, next) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const message = isProduction ? 'Some error' : error.message;
  res.status(500).json({
    message,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
