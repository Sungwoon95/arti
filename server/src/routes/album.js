import { readJSON, writeJSON } from '../jsonController.js'

const artistRoute = [
  {
    method: 'get',
    route: '/album',
    handler: (req, res) => {
      const album = readJSON('album')
      res.send(album)
    }
  }, {
    method: 'post',
    route: '/album',
    handler: ({ body }, res) => {
      try {
        if (!body.albumtitle) return
        const album = readJSON('album')
        const newAlbum = {
          ...body
        }
        album.unshift(newAlbum)
        writeJSON('album', album)
        res.send(newAlbum)
      } catch (error) {
        console.error(error)
      }
    }
  },
  {
    method: 'get',
    route: '/album/:name',
    handler: ({ params: { name } }, res) => {
      try {
        const album = readJSON('album')
        const song = readJSON('song')
        const targetAlbum = album.find(i => i.targetid === name)
        const targetSong = song.filter(i => i.albumid === name)
        // const target = artist[name.replace(" ", "")]
        if (!targetAlbum || targetAlbum === undefined) throw Error('해당 앨범이 없습니다.')
        console.log()
        res.send({ targetAlbum, targetSong })
      } catch (error) {
        console.error(error)
      }
    }
  }
]

export default artistRoute