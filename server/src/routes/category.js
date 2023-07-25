import { readJSON } from '../jsonController.js'

const categoryRoute = [
  {
    method: 'get',
    route: '/category',
    handler: (req, res) => {
      const category = readJSON('category')
      res.send(category)
    }
  }
]

export default categoryRoute