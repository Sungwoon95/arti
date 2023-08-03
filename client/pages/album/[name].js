import { useRouter } from 'next/router'
import fetcher from '../../fetcher'
import { useEffect, useState } from 'react';
import Discography from '../../components/Discography';
import SnsCard from '../../components/SnsCard';
import IconTitle from '../../components/IconTitle';
import RelatedArtist from '../../components/RelatedAritst';
import { calcDate, calcDays, calcTimestamp, calcYears } from '../../utils/calcDate';
import Comment from '../../components/Comment';
import { secToMin } from '../../utils/secToMin';
import Badge from '../../components/Badge';
import CenterImg from '../../components/CenterImg';

const AlbumName = () => {
  const router = useRouter();
  const [album, setAlbum] = useState({})
  const [songList, setSongList] = useState([])
  const [load, setLoad] = useState(true)
  const query = router.query.name

  const getAlbum = async () => {
    const data = await fetcher('get', `album/${query}`)
    setAlbum(data.targetAlbum)
    setSongList(data.targetSong)
  }

  useEffect(() => {
    if (!router.isReady) return;
    getAlbum()
  }, [router.isReady, router.asPath])

  useEffect(() => {
    if (Object.keys(album).length === 0) return
    setLoad(false)
  }, [album])

  if (!load) {
    console.log(Object.keys(album) + '')
    // console.log(Object.keys(songList[0]) + '')
  }
  const { artistname, albumtype, date, albumtitle, imgurl, song, targetid } = album

  return (
    <section className='album_name_wrap'>
      {!load ?
        <section className='album_name_section'>
          <div className='album_name_list'>
            <div className='album_name_title'>
              <CenterImg paddingBottom={'100%'} maxWidth={'120px'} url={`http://localhost:8000/${imgurl}`} />
              <div>
                <p>{artistname}</p>
                <h1>{albumtitle}</h1>
                <p>수록곡 {songList.length}곡</p>
                <p>앨범 러닝타임 {secToMin(songList.map(i => parseInt(i.runningtime)).reduce((prev, cur) => prev + cur))}</p>
              </div>
            </div>
            <div>
              {songList.map((i, idx) =>
                <div className='album_song_info' key={idx}>
                  <div className='flex'>
                    <p>{i.songname}</p>
                    {i.istitle ?
                      <Badge text={'타이틀'} color={'#ff4d4d'} /> :
                      ""}
                  </div>
                  {i.artistname}
                  {secToMin(i.runningtime)}
                  <p>{i.date}</p>
                  <p>{i.lyric}</p>
                  {i.link}
                </div>)}
            </div>
          </div>
        </section>
        :
        <section className='art_shadow'>
          <section className={'art_bg_wrap load'} />
          <section className={'default_section'} />
        </section>
      }
    </section>
  )
}

export default AlbumName