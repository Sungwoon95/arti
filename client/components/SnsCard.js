import Link from "next/link";
import { useState } from "react";


const SnsCard = ({
  ...rest
}) => {
  const { insta, twitter, facebook, tiktok, spotify, youtube } = rest
  // 구조 분해 할당
  const [snsList, setSnsList] = useState(Object.keys(rest).map(i => i))
  // const [isCut, setIsCut] = useState(false)
  // const [isShow, setIsShow] = useState(false)
  const siteList = {
    insta: { url: 'https://instagram.com' },
    twitter: { url: 'https://twitter.com' },
    facebook: { url: 'https://facebook.com' },
    tiktok: { url: 'https://tiktok.com' },
    youtube: { url: 'https://youtube.com' },
    spotify: { url: 'https://spotiry.com' }
  }
  if (snsList.length > 4) {
    setSnsList(snsList.slice(0, 4))
    // setIsCut(true)
  }
  const cardView = (sns) => {
    if (siteList[sns] !== undefined) {
      return (
        <Link key={sns} href={siteList[sns].url + "/" + rest[sns]}>
          <div>
            <img src={`http://localhost:8000/sns/${sns}.svg`} />
          </div>
        </Link>
      )
    }
  }

  // const allList = () => {
  //   setIsShow(true)
  // }
  return (
    <aside className='sns_card_wrap'>
      {snsList.map(i => (cardView(i)))}
      {/* {isCut
        ?
        <div className='dot' onClick={allList}>
          <span />
        </div>
        :
        ""} */}
      {/* {isShow
        ?
        <section>
          {Object.keys(rest).map(i => i).slice(4, rest.length).map(i => (cardView(i)))}
        </section>
        :
        ""} */}
    </aside>
  )
}

export default SnsCard