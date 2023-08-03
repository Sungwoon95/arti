import Link from "next/link";
import { calcDate } from "../utils/calcDate";

// 
const Anniv = (rest) => {
  const { name_kor, thumbnail, type, country_kor, name, group, country, debut, tumbnail, year, debut_album } = rest
  const { albumtitle, imgurl, date, albumtype, song } = debut_album
  const trimName = name.replace(" ", "")
  // 구조 분해 할당
  console.log(rest)
  return (
    <section className='anniv_card_wrap'>
      <Link href={`/artist/${name.replace(' ', '')}`}>
        <div className={'anniv_artist_shadow'}>
          <div className={'anniv_artist_main'}>
            <div className={'anniv_main_img'}>
              <img src={`http://localhost:8000/${thumbnail}`} />
            </div>
            <div className={'anniv_card_item'}>
              <div className={'anniv_card_img_wrap'}>
                <div className={'anniv_card_img'}>
                  <img src={`http://localhost:8000/${imgurl}`} />
                </div>
              </div>
              <div className={'anniv_card_info'}>
                <div className={'flex'}>
                  <span className={'album_type'}>
                    {albumtype}
                  </span>
                  <p>
                    {albumtitle}
                  </p>
                </div>
                <time dateTime={calcDate(date).dateTime}>
                  {calcDate(date, '.').type}
                </time>
              </div>
            </div>
          </div>
          <div className={'anniv_card_desc'}>
            <h3>
              {year}년 전 {name_kor}
            </h3>
            <div>
              <span style={{ color: '#458aff' }}>데뷔 앨범</span>
              <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{albumtitle}</p>
            </div>
            {/* <div className={'flex'}>
            <p>수록곡 수 : </p>
            <p>{song.length}</p>
          </div>
          <div className={'flex'}>
            <p>수록곡 목록 : </p>
            <p>{song.map(i => i)}</p>
          </div> */}
          </div>
        </div>
      </Link>
    </section>

  )
}

export default Anniv
