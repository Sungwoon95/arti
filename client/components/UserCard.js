import Link from "next/link";
import { useState } from "react";

const UserCard = (
  rest
) => {
  const { name_kor, type, country_kor, name, group, country, debut, tumbnail } = rest
  const trimName = name.replace(" ", "")
  // 구조 분해 할당
  // console.log(rest)
  return (
    <section className='user_card_wrap'>
      <Link href={`/artist/${trimName}`}>
        <div className={'user_card_profile'}>
          <img src={`http://localhost:8000/${trimName}/thumbnail.jpg`} />
        </div>
        <div className={'user_card_info'}>
          <p>
            {name_kor}
          </p>
          <div className={'flex'}>
            <span>{country_kor}</span>
            <span>·</span>
            <span>{type}</span>
          </div>
        </div>
      </Link>
    </section>

  )
}

export default UserCard
