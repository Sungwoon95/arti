import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter();

  return (
    <section className={'default_page'}>
      <p className={'monthly_artist'}>찾을 수 없는 페이지입니다.</p>
    </section>
  )
}
