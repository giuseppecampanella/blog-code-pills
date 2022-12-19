import express from 'express';

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', (req:any, res:any) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});