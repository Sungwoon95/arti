import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchForm from "../../components/SearchForm"
import fetcher from "../../fetcher"
import { insert } from "../../slice/searchSlice"

const SearchPage = () => {
  const router = useRouter()
  const [searchData, setSearchData] = useState([])
  const { text, initText } = useSelector((state) => state.search)
  const [init, setInit] = useState(true)
  const [hasAddress, setHasAddress] = useState("")

  const getSearch = async (search) => {
    if (search === "" && search !== router.query.search) {
      const data = await fetcher('get', `s/${router.query.search.toLowerCase().replace(/ /g, '')}`)
      router.push(`/s/${router.query.search}`)
      setInit(false)
      setSearchData(data)
      return setHasAddress('true')
    }

    const data = await fetcher('get', `s/${search.toLowerCase().replace(/ /g, '')}`)
    router.push(`/s/${search}`)
    setHasAddress("false")
    setSearchData(data)
  }

  console.log(init)
  useEffect(() => {
    if (!router.query.search) return
    getSearch(text)
    setInit(false)
  }, [text, router.isReady, router.query.search])
  return (
    <section className={'default_page'}>
      <SearchForm searching={router.query.search} address={hasAddress} />
      {searchData.length}개의 앨범
      {searchData.map(i =>
        <div key={i.albumtitle + i.artistname}>
          <p>{i.albumtitle}</p>
          <p>{i.artistname}</p>
        </div>
      )}
    </section>
  )
}

export default SearchPage