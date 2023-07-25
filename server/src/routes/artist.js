import { readJSON } from '../jsonController.js'

const calcAnniv = (timestamp, type) => {
  const time = new Date(parseInt(timestamp))
  if (type === 'y') {
    return time.getFullYear()
  }
  else if (type === 'm') {
    return time.getMonth() + 1
  }
  return time.getDate()
}

const artistRoute = [
  {
    method: 'get',
    route: '/artist',
    handler: (req, res) => {
      const target = readJSON('artist')
      const debutAlbum = readJSON('album')
      const targetValue = Object.values(target)
      const monthly = targetValue.sort((prev, curr) => {
        const pre = parseInt(prev.page_view)
        const cur = parseInt(curr.page_view)
        return cur - pre
      }).slice(0, 3)
      const annivArtist = targetValue.filter(i => calcAnniv(i.debut, 'm') === calcAnniv(Date.now(), 'm'))
        .filter(i => calcAnniv(i.debut, 'd') === calcAnniv(Date.now(), 'd') - 3).map((i) => ({
          ...i, year: calcAnniv(Date.now(), 'y') - calcAnniv(i.debut, 'y'),
          debut_album: debutAlbum[debutAlbum.findIndex((el) => el.artistname === i.name && el.date === i.debut)]
        }))

      console.log("n주년 아티스트", annivArtist)
      res.send({ target, monthly, annivArtist })
    }
  }, {
    method: 'get',
    route: '/artist/:name',
    handler: ({ params: { name } }, res) => {
      try {
        const artist = readJSON('artist')
        const album = readJSON('album')
        const member = readJSON('member')
        const comment = readJSON('comment')

        const target = artist[name]

        const related = target.related.map(i => artist[`${i.replace(" ", "")}`])
        const targetAlbum = album.filter((i) => i.artistname.replace(" ", "") === name)
        const targetMember = member.filter((i) => i.target.replace(" ", "") === name)
        const targetComment = comment.filter((i) => i.target.replace(" ", "") === name)
        console.log(targetMember)
        if (!target) {
          res.status(404)
          // throw new Error('해당 아티스트가 존재하지 안습니다.')
        }
        res.send({ target, targetAlbum, related, targetMember, targetComment })

      } catch (error) {
        console.error(error)
      }
    }
  }
]

export default artistRoute