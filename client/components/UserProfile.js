import { useState } from "react";

const UserProfile = ({
  profile
}) => {
  const { name, group, country, sns, debut, profileurl } = profile
  // 구조 분해 할당
  // console.log(sns)
  return (
    <section className='user_profile_wrap'>

      <section className='user_profile_img'>
        <img src={`http://localhost:8000/${profileurl}`} />
      </section>
      <section className='user_profile_info'>
        <h3>{name}</h3>
        <h3>{group}</h3>
        <h3>{country}</h3>
        <h3>{debut}</h3>
      </section>


    </section>
  )
}

export default UserProfile