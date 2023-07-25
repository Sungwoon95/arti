import { useRouter } from 'next/router'
import fetcher from '../../fetcher'
import { useEffect, useState } from 'react';
import Discography from '../../components/Discography';
import SnsCard from '../../components/SnsCard';
import IconTitle from '../../components/IconTitle';
import RelatedArtist from '../../components/RelatedAritst';
import { calcDate, calcDays, calcTimestamp, calcYears } from '../../utils/calcDate';
import Comment from '../../components/Comment';
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
  }, [router.isReady, router.asPath])

  useEffect(() => {
    if (Object.keys(artist).length === 0) return
    setLoad(false)
  }, [artist])

  const { target, targetAlbum, targetComment, related, targetMember } = artist

  if (!load) {
    const dateSort = targetAlbum.sort((a, b) => {
      return b.date - a.date
    })
    // console.log(calcTimestamp('20000411'))
  }

  return (
    <section className='art_name_wrap'>
      {!load ?
        <>
          <section className='art_shadow'>
            <section className={'art_bg_wrap'}>
              <section className={'art_name'}>
                <section className={'flex art_name_info'}>
                  <span className={'country'}>
                    {target.country_kor}
                  </span>
                  <span>·</span>
                  <span>{target.type}</span>
                </section>
                <h1>
                  {target.name.toUpperCase()}
                </h1>
                <section className={'art_info'}>
                  <section className={'art_name_info'}>
                    <section className={'flex'}>
                      <span>
                        데뷔
                    </span>
                      <time dateTime={calcDate(target.debut, ".").dateTime}>
                        {calcDate(target.debut, ".").type}
                      </time>
                      <span>
                        +{calcDays(target.debut).toLocaleString('ko-KR')}일
                    </span>
                    </section>
                    <section className={'flex'}>
                      <span>발매앨범 {targetAlbum.length}</span>
                      <span>·</span>
                      <span>
                        발매곡 {targetAlbum.map(i => i.song.length).reduce((prev, curr) => (
                        prev + curr
                      ))}
                      </span>
                    </section>
                  </section>
                  {Object.values(target.sns).map((i, idx) =>
                    <SnsCard key={idx} {...i} />
                  )}
                </section>
              </section>
              <img className='art_bg' src={`http://localhost:8000/${query}/thumbnail.jpg`} />
            </section>
          </section>
          {/* <section className={`art_profile_wrap`}>
            <h2>Profile</h2>
            <UserProfile profile={target} />
          </section> */}
          <section className={'art_info_wrap'}>
            {targetMember.map(i =>
              <section className={'member_profile_wrap'} key={i.memberid}>
                <div className={'member_profile_img'}>
                  <div className={'member_profile'}>
                    <img src={`http://localhost:8000/member/${i.memberid}/thumbnail.jpg`} />
                  </div>
                  {i.sns.map((sns, idx) =>
                    <SnsCard key={idx} {...sns} />)}
                </div>

                <div className={'member_profile_info'}>
                  <div className={'flex_base'}>
                    <p>
                      {i.name}
                    </p>
                    <span>·</span>
                    <p>{i.target_kor}</p>
                  </div>
                  <div className={'flex_base'}>
                    <p>
                      {calcYears(i.born)}세
                  </p>
                    <time dateTime={calcDate(i.born).dateTime}>
                      ({calcDate(i.born, ".").type})
                    </time>
                  </div>
                  <p>
                    {i.height}cm
                  </p>
                  <div className={'flex_base'}>
                    <p>
                      {i.gender === "female" ? "여성" : "남성"}
                    </p>
                    <span>·</span>
                    {i.country_kor}
                  </div>
                </div>
              </section>)}
          </section>
          <section className={'art_info_wrap'}>
            <IconTitle text={`발매 앨범 (${targetAlbum.length}개)`} icon={'recent'} />
            {targetAlbum.sort((a, b) => {
              return b.date - a.date
            }).map(i => <Discography {...i} key={i.albumtitle} />)}
          </section>
          <section className={'art_info_wrap'}>
            <IconTitle text={`${target.name_kor} 팬이 좋아하는 아티스트`} icon={'heart'} />
            <section className={'related_artist'}>
              {related.map(i =>
                <RelatedArtist key={i.name} {...i} />)}
            </section>
          </section>
          <section className={'art_info_wrap'}>
            <IconTitle text={`응원 댓글 (${targetComment.length}개)`} icon={'comment'} />
            {targetComment.map((i, idx) => <Comment key={idx} {...i} />)}
          </section>
        </>
        :
        <section className='art_shadow'>
          <section className={'art_bg_wrap load'}>
          </section>
        </section>
      }
    </section>
  )
}

export default ArtistName