import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import fetcher from '../fetcher';
import UserCard from '../components/UserCard';

const category = () => {
  const router = useRouter();
  const [artist, setArtist] = useState({});
  const getArtist = async() => {
    const data = await fetcher('get','artist')
    setArtist(data)
  }

  useEffect(()=>{
    if(!router.isReady) return;
    getArtist();
  },[router.isReady])
  // if()
  // console.log(artist)
  const artistVal = Object.values(artist)
  if(artistVal.length!==0){
    console.log(artistVal)
  }
  
  // for(const value of Object.values(artist)){
  //   console.log(value)
  // }

  return (
    <section className='default_page'>
      { artistVal.length !== 0?
      artistVal.map((i)=>(
        <UserCard key={i.name} {...i}/>
      ))
      :''}
    </section>
  )
}

export default category