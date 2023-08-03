import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import fetcher from '../../fetcher';
import UserCard from '../../components/UserCard';
import IconTitle from '../../components/IconTitle';
import Link from 'next/link';
import Anniv from '../../components/Anniv';

const SongIndex = () => {
  const router = useRouter();
  const [songList, setSongList] = useState([]);
  const [load, setLoad] = useState(true)

  const getSong = async () => {
    const data = await fetcher('get', 'song')
    setSongList(data)
  }

  useEffect(() => {
    if (!router.isReady) return;
    getSong();
  }, [router.isReady])


  useEffect(() => {
    if (songList.length === 0) return
    setLoad(false)
  }, [songList])

  if (!load) {
    console.log(JSON.stringify(songList.map((i, idx) => ({ ...i, targetid: `awdjaknxklkm${idx}` }))))
  }
  return (
    <section className='default_page'>
      { !load ?
        <div className={'artist_index'}>
          <section className={'monthly_artist'}>
            <IconTitle text={'이 달의 앨범'} icon={'calendar'} />
            <div className={'monthly_artist_over'}>
              <div className={'monthly_artist_list'}>
                <div className={'monthly_artist_bg_h'}>
                  <div className={'monthly_artist_img_h'} />
                </div>
              </div>
            </div>
          </section>
          <section className={'all_artist'}>
            <h2>전체 앨범</h2>
            {songList.map((i, idx) => <p key={idx}>{i.songname}</p>)}
          </section>
        </div>
        : <section className='default_page' />}
    </section>
  )
}

export default SongIndex