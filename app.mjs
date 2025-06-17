import express from 'express';
import { join, dirname } from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.use(express.static(join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Base path is set to: ${BASE_PATH}`);
})

