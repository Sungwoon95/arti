import { readJSON } from '../jsonController.js'

const artistRoute = [
  {
    method: 'get',
    route: '/artist',
    handler: (req, res) => {
      const artist = readJSON('artist')
      res.send(artist)
    }
  }, {
    method: 'get',
    route: '/artist/:name',
    handler: ({ params: { name } }, res) => {
      try {
        const artist = readJSON('artist')
        const album = readJSON('album')
        const target = artist[name]
        const targetAlbum = album.filter((i) => i.artistname === name)
        console.log({ targetAlbum, target })
        if (!target) throw Error('해당 아티스트가 없습니다.')
        res.send({ target, targetAlbum })
      } catch (error) {
        console.error(error)
      }
    }
  }
]

export default artistRoute