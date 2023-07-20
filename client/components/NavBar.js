import { useEffect, useState } from "react";
import fetcher from "../fetcher";

const NavBar = ({
}) => {
  const [category, setCategory] = useState([])
  const getCategory = async () => {
    const data = await fetcher('get', 'category')
    setCategory(data)
  }
  useEffect(() => {
    getCategory()
  }, [])
  if (category.length !== 0) {
    console.log(category.map(i => i.category_kor))
  }
  return (
    <header>
      <section className='header_wrap'>
        <section>
          <div className='logo_img' />
        </section>
        <ul>
          {category.length !== 0
            ?
            category.map(i => (
              <p key={i.category}>{i.category_kor}</p>
            ))
            :
            ''
          }
        </ul>
      </section>
    </header>
  )
}

export default NavBar