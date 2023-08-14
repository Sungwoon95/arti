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
      try {
        const album = readJSON('album')
        const song = readJSON('song')
        const artist = readJSON('artist')
        const artistArr = Object.values(artist)
        const searchAlbum = album.filter(i => i.albumtitle.toLowerCase().replace(/ /g, '').includes(search))
        const searchArtist = artistArr.filter(i => i.name.toLowerCase().replace(/ /g, '').includes(search)).sort((prev, curr) => (
          curr.page_view - prev.page_view
        )).slice(0, 1)
        const searchSong = song.filter(i => i.songname.toLowerCase().replace(/ /g, '').includes(search))

        // const searchAlbum = (search) => {
        //   const fil = album.map(i => i)
        //   console.log(fil)
        //   album.filter(i => i.albumtitle.toLowerCase().replace(/ /g, '').includes(search))
        //   album.filter(i => i.albumtitle.toLowerCase().replace(/ /g, '').includes(search))
        // }
        // searchAlbum(search)
        // console.log(Object.keys(album[0]))
        // console.log(searchArtist)
        res.send({ searchAlbum, searchArtist, searchSong })
      }
      catch (error) {
        console.error(error)
      }
    }
  }
]

export default searchRoute