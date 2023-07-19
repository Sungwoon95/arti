import {useRouter} from 'next/router'
import fetcher from '../../fetcher'
import { useEffect, useState } from 'react';
const ArtistName = () => {
  const router = useRouter();
  const [artist,setArtist] = useState({})
  const [load, setLoad] = useState(true)
  const query = router.query.name
  const getArtist = async() => {
    const data = await fetcher('get',`artist/${query}`)
    setArtist(data)
  }

  useEffect(()=>{
    if(query===undefined) return;
    getArtist()
  },[query])

  useEffect(()=>{
    if(Object.keys(artist).length===0) return
    setLoad(false)
  },[artist])

  const {target, targetAlbum} = artist
  return (
    <div>
      {load?'로딩 중': target.name}
    </div>
  )
}

export default ArtistName