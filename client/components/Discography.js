import { useState } from "react";
import { calcDate } from "../utils/calcDate";

const Discography = ({ albumtitle, date, imgurl, song, load, artistname, onDelete }) => {
  const [toggle, setToggle] = useState(false);
  const [hasImg, setHasImg] = useState(true)
  // if (load === true) return
  // const { artistname, album } = targetAlbum

  const onClick = () => {
    setToggle(!toggle)
  }

  const onError = () => {
    setHasImg(false)
  }
  return (
    <section className="discography_wrap" onClick={onClick}>
      <div className="discography_img">
        {/* <div className='img' /> */}
        {hasImg
          ?
          <img onError={onError} className='img' src={`http://localhost:8000/${imgurl}`} />
          :
          <div className={'img'} >
            <p style={{ color: '#ffffff' }}>
              {albumtitle}
            </p>
          </div>
        }
      </div>
      <section className="discography_info">
        <time dateTime={calcDate(date, '.').dateTime}>
          {calcDate(date, '.').type}
        </time>
        <h3 onClick={onClick}>{albumtitle}</h3>
        <p>{artistname}</p>
      </section>
      {/* <button onClick={onDelete}>삭제</button> */}
      {/* {toggle ? song.map(i => (
        <p key={i}>{i}</p>
      )) : <></>} */}
    </section>
  )
}

export default Discography