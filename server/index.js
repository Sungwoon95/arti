import express from 'express'
import cors from 'cors'
import artistRoute from './src/routes/artist.js';
import { resolve } from 'path'
import categoryRoute from './src/routes/category.js';
import albumRoute from './src/routes/album.js';

const app = express();
const PORT = 8000;
const originUrl = 'http://localhost:3000';

app.use(cors({
  origin: originUrl,
  credentials: true
}))

const basePath = resolve()
const imgPath = app.use(express.static(resolve(basePath, 'src/img')))

const routesArr = [...artistRoute, ...categoryRoute, ...albumRoute]

app.get('/', (_, res) => {
  res.send('good')
})

const routes = routesArr.forEach(({ method, route, handler }) => {
  app[method](route, handler)
})

app.listen(PORT, () => {
  console.log('app')
})
