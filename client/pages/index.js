import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={'default_page'}>
      <Link href={'/artist'}>
        <h2 class={'link'}>
          페이지 이동
        </h2>
      </Link>
    </div>
  )
}
