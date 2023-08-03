import { useEffect, useState } from "react";
import fetcher from "../fetcher";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = ({
}) => {
  const [category, setCategory] = useState([])
  const router = useRouter();
  const query = router.query.category
  const getCategory = async () => {
    const data = await fetcher('get', 'category')
    setCategory(data)
  }
  useEffect(() => {
    getCategory()
  }, [])
  // if (category.length !== 0) {
  //   console.log(category.map(i => i.category),router)
  // }
  return (
    <header>
      <section className='header_wrap'>
        <Link href={'/'}>
          <div>
            <div className='logo_img' />
          </div>
        </Link>
        <ul>
          {category.length !== 0
            ?
            category.map(i => (
              <Link key={i.category} href={`/${i.category}`}>
                <p className={router.asPath.includes(i.category) ? "active category_item" : "category_item"}>
                  {i.category_kor}
                </p>
              </Link>
            ))
            :
            ''
          }
          <Link href='/s'>
            검색
          </Link>
        </ul>
      </section>
    </header>
  )
}

export default NavBar