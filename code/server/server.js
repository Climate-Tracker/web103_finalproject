import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import regionRouter from './routes/regions.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/regions', regionRouter);
// app.use('/destinations', destinationRouter);
// app.use('/reviews', reviewRouter);
app.get('/', (req, res) => {
  console.log('Receive request for Region API');
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Touriscope API</h1>');
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})