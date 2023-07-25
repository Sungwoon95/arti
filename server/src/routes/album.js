import { readJSON } from '../jsonController.js'

const artistRoute = [
  {
    method: 'get',
    route: '/album',
    handler: (req, res) => {
      const album = readJSON('album')
      res.send(album)
    }
  }, {
    method: 'get',
    route: '/album/:name',
    handler: ({ params: { name } }, res) => {
      try {
        const artist = readJSON('artist')
        const target = readJSON('album')
        const targetAlbum = target.filter(i => i.artistname.replace(' ', '') === name)
        // const target = artist[name.replace(" ", "")]
        // if (!target) throw Error('해당 아티스트가 없습니다.')
        // console.log(target)
        res.send(targetAlbum)
      } catch (error) {
        console.error(error)
      }
    }
  }
]

export default artistRoute