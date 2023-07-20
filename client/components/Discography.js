import { useState } from "react";

const Discography = ({
  albumtitle, date, imgurl, song, load, artistname
}) => {
  const [toggle, setToggle] = useState(false);
  // if (load === true) return
  // const { artistname, album } = targetAlbum
  const dateTime = new Date(parseInt(date)).toLocaleString('ko-KR', {
    years: 'numeric'
  })
  const onClick = () => {
    setToggle(!toggle)
  }
  // console.log(albumtitle)
  return (
    <section className="discography_wrap" onClick={onClick}>
      <section className="discography_img">
        {/* <div className='img' /> */}
        <img className='img' src={`http://localhost:8000/${imgurl}`} />
      </section>
      <section className="discography_info">
        <time dateTime={dateTime}>
          {new Date(parseInt(date)).getFullYear()}
          -
          {new Date(parseInt(date)).getMonth() + 1}
          -
          {new Date(parseInt(date)).getDate()}
        </time>
        <h3 onClick={onClick}>{albumtitle}</h3>
        <p>{artistname}</p>
      </section>
      {toggle ? song.map(i => (
        <p key={i}>{i}</p>
      )) : <></>}
      {/* <aside>
        <p>Track List</p>
      </aside> */}
    </section>
  )
}

export default Discography