import { readJSON } from '../jsonController.js'

const categoryRoute = [
  {
    method: 'get',
    route: '/category',
    handler: (req, res) => {
      try {
        const category = readJSON('category')
        res.send(category)
      } catch (error) {
        console.error('category:', error)
      }
    }
  }
]

export default categoryRoute