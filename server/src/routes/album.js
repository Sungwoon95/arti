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
        const target = artist[name]
        if (!target) throw Error('해당 아티스트가 없습니다.')
        console.log(target)
        res.send(target)
      } catch (error) {
        console.error(error)
      }
    }
  }
]

export default artistRoute