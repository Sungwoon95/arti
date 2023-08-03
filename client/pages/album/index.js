import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import fetcher from '../../fetcher';
import UserCard from '../../components/UserCard';
import IconTitle from '../../components/IconTitle';
import Link from 'next/link';
import Anniv from '../../components/Anniv';

const AlbumIndex = () => {
  const router = useRouter();
  const [albumList, setAlbumList] = useState([]);
  const [load, setLoad] = useState(true)

  const getAlbum = async () => {
    const data = await fetcher('get', 'album')
    setAlbumList(data)
  }

  useEffect(() => {
    if (!router.isReady) return;
    getAlbum();
  }, [router.isReady])


  useEffect(() => {
    if (albumList.length === 0) return
    setLoad(false)
  }, [albumList])

  if (!load) {
    console.log(JSON.stringify(albumList.map((i, idx) => ({ ...i, targetid: `awdjaknxklkm${idx}` }))))
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
            {albumList.map((i, idx) =>
              <section key={idx}>
                <Link href={`/album/${i.targetid}`}>
                  {i.albumtitle}
                </Link>
              </section>
            )}
          </section>
        </div>
        : <section className='default_page' />}
    </section>
  )
}

export default AlbumIndex