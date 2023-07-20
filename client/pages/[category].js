import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const category = () => {
  const router = useRouter();
  const category = router.query.category

  useEffect(()=>{
    if(!router.isReady) return;
    console.log(category)
  },[router.isReady])
  
  return (
    <div>category</div>
  )
}

export default category