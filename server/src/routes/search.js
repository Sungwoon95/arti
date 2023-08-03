import { readJSON } from '../jsonController.js'

const searchRoute = [
  {
    method: 'get',
    route: '/s/',
    handler: (req, res) => {
      const searchAlbum = readJSON('album')
      res.send([])
    }
  },
  {
    method: 'get',
    route: '/s/:search',
    handler: ({ params: { search } }, res) => {
      const searchAlbum = readJSON('album')
      res.send(searchAlbum.filter(i => i.albumtitle.toLowerCase().replace(/ /g, '').includes(search)))
    }
  }
]

export default searchRoute