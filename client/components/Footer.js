import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  return (
    <footer>
      <div className={'footer_wrap'}>
        <Link href={'/artist'}>아티스트 페이지</Link>
        <Link href={'/album'}>앨범 페이지</Link>
        <Link href={'/song'}>노래 페이지</Link>
      </div>
    </footer>
  )
}

export default Footer