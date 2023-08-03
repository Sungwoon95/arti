import fs from 'fs';
import { resolve } from 'path'

const basePath = resolve()

const filenames = {
  artist: resolve(basePath, 'src/json/artist.json'),
  album: resolve(basePath, 'src/json/album.json'),
  category: resolve(basePath, 'src/json/category.json'),
  member: resolve(basePath, 'src/json/member.json'),
  comment: resolve(basePath, 'src/json/comment.json'),
  song: resolve(basePath, 'src/json/song.json')
}

export const readJSON = (type) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[type], 'utf-8'))
  } catch (error) {
    console.error(error)
  }
}

export const writeJSON = (type, data) => {
  try {
    return fs.writeFileSync(filenames[type], JSON.stringify(data))
  } catch (error) {
    console.error(error)
  }
}