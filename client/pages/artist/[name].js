import { useRouter } from 'next/router'
import fetcher from '../../fetcher'
import { useEffect, useState } from 'react';
import Discography from '../../components/Discography';
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';
import UserProfile from '../../components/UserProfile';
const ArtistName = () => {
  const router = useRouter();
  const [artist, setArtist] = useState({})
  const [load, setLoad] = useState(true)
  const query = router.query.name

  const getArtist = async () => {
    const data = await fetcher('get', `artist/${query}`)
    setArtist(data)
  }

  useEffect(() => {
    if (!router.isReady) return;
    getArtist()
  }, [router.isReady])

  useEffect(() => {
    if (Object.keys(artist).length === 0) return
    setLoad(false)
  }, [artist])

  const { target, targetAlbum } = artist

  if (!load) {
    const dateSort = targetAlbum.sort((a, b) => {
      return b.date - a.date
    })
    // console.log(target)
  }
  return (
    <section className='art_name_wrap'>
      {!load ?
        <>
          <section className={'art_bg_wrap'}>
            <h1 className={'art_name'}>
              {target.name.toUpperCase()}
            </h1>
            <img className='art_bg' src={`http://localhost:8000/${query}/thumbnail.jpg`} />
          </section>
          <section className={`art_profile_wrap`}>
            <h2>Profile</h2>
            <UserProfile profile={target} />
          </section>
          <section className={'art_info_wrap'}>
            <h2>Discography</h2>
            {targetAlbum.sort((a, b) => {
              return b.date - a.date
            }).map(i => <Discography {...i} key={i.albumtitle} />)}
          </section>
        </>
        :
        <p>
          로딩
        </p>
      }
    </section>
  )
}

export default ArtistName