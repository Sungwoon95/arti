import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import fetcher from '../../fetcher';
import UserCard from '../../components/UserCard';
import IconTitle from '../../components/IconTitle';
import Link from 'next/link';
import Anniv from '../../components/Anniv';

const category = () => {
  const router = useRouter();
  const [artist, setArtist] = useState({});
  const [load, setLoad] = useState(true)
  const getArtist = async () => {
    const data = await fetcher('get', 'artist')
    setArtist(data)
  }

  useEffect(() => {
    if (!router.isReady) return;
    getArtist();
  }, [router.isReady])

  const { target, monthly, annivArtist } = artist

  useEffect(() => {
    if (target == undefined) return
    setLoad(false)
  }, [artist])

  // if (!load) {
  //   console.log(!load)
  // }
  return (
    <section className='default_page'>
      { !load ?
        <div className={'artist_index'}>
          <section className={'monthly_artist'}>
            <IconTitle text={'이 달의 아티스트'} icon={'calendar'} />
            <div className={'monthly_artist_over'}>
              <div className={'monthly_artist_list'}>
                {monthly.map((i, idx) =>
                  <Link key={idx} href={`/artist/${i.name.replace(" ", "")}`}>
                    <div className={`monthly${idx} monthly_artist_bg`} style={{ zIndex: 30 - idx }}>
                      <div className={'monthly_artist_img'}>
                        <img src={`http://localhost:8000/${i.name.replace(" ", "")}/thumbnail.jpg`} />
                      </div>
                      <p className={'font_effect'}>{i.name.toUpperCase()}</p>
                      <p className={'font_effect'}>{i.name.toUpperCase()}</p>
                      <div className={'monthly_artist_title'}>
                        <div className={'monthly_artist_wrap'}>
                          <h3>{i.name_kor}</h3>
                          <div className={'flex'}>
                            <span>{i.country_kor}</span>
                            <span>·</span>
                            <span>
                              {i.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
                <div className={'monthly_artist_bg_h'}>
                  <div className={'monthly_artist_img_h'} />
                </div>
              </div>
            </div>
          </section>
          {annivArtist.length !== 0
            ?
            <section className={'anniv_artist'}>
              <h2>오늘 데뷔했던</h2>
              <div className={'anniv_artist_section'}>
                {annivArtist.map((i) => <Anniv key={i.name} {...i} />)}
              </div>
            </section>
            :
            ''}
          <section className={'all_artist'}>
            <h2>전체 아티스트</h2>
            <div className={'all_artist_list'}>
              {Object.values(target).map((i) => (
                <UserCard key={i.name} {...i} />
              ))}
            </div>
          </section>
        </div>
        : <section className='default_page' />}
    </section>
  )
}

export default category