import { readJSON } from '../jsonController.js'

const getRanNum = (num) => {
  const ran = Math.floor(Math.random() * num)
  return ran
}

const songRoute = [
  {
    method: 'get',
    route: '/song',
    handler: (req, res) => {
      try {
        const song = readJSON('song')
        res.send(song.map((i, idx) => ({ ...i, songid: `awdklnn2kscc${idx}` })))
      } catch (error) {
        console.error('song:', error)
      }
    }
  }
]

export default songRoute