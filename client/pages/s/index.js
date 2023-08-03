import { useEffect, useState } from "react"
import SearchForm from "../../components/SearchForm"
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/router"
import fetcher from "../../fetcher"

const SearchIndex = () => {
  const { text, initText } = useSelector((state) => state.search)
  const router = useRouter()

  useEffect(() => {
    if (text === '') return
    router.push(`/s/${text}`)
    console.log("이동", text.length)
  }, [text])
  return (
    <section className={'default_page'}>
      <SearchForm />
    </section>
  )
}

export default SearchIndex