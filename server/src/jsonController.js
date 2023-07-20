import fs from 'fs';
import { resolve } from 'path'

const basePath = resolve()

const filenames = {
  artist: resolve(basePath, 'src/json/artist.json'),
  album: resolve(basePath, 'src/json/album.json'),
  category: resolve(basePath, 'src/json/category.json')
}

export const readJSON = (type) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[type], 'utf-8'))
  } catch (error) {
    console.error(error)
  }
}