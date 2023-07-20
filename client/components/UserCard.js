import Link from "next/link";
import { useState } from "react";

const UserCard = ({
  ...rest
}) => {
  const {name, group, country, debut, tumbnail} = rest
  const trimName=name.replace(" ","")
  // 구조 분해 할당
  console.log(trimName)
  return (
    <Link href={`/artist/${trimName}`}>
    <section className='user_card_wrap'>
      {name}
      {country}
      <img src={`http://localhost:8000/${trimName}/thumbnail.jpg`}/>
    </section>
    </Link>
  )
}

export default UserCard