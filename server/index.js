import express from 'express'
import cors from 'cors'
import artistRoute from './src/routes/artist.js';
import { resolve } from 'path'
import categoryRoute from './src/routes/artist copy.js';

const app = express();
const PORT = 8000;
const originUrl = 'http://localhost:3000';

app.use(cors({
  origin: originUrl,
  credentials: true
}))

const basePath = resolve()
const imgPath = app.use(express.static(resolve(basePath, 'src/img')))

const routes = [...artistRoute, ...categoryRoute]

app.get('/', (_, res) => {
  res.send('good')
})

const routesl = routes.forEach(({ method, route, handler }) => {
  app[method](route, handler)
})

app.listen(PORT, () => {
  console.log('app', imgPath)
})
