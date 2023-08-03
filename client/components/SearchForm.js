import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { insert } from "../slice/searchSlice"

const SearchForm = ({ address, searching }) => {
  const { text } = useSelector((state) => state.search)
  const dispatch = useDispatch()
  const router = useRouter()

  const changeHandler = (e) => {
    dispatch(insert(e.target.value))
  }

  // const emptyText = (txt) => {
  //   if (router.asPath !== '/s') {
  //     if (text === '' && router.query.search !== undefined) return router.push(`/s/${router.query.search}`)
  //     // return router.push(`/s/${text}`)
  //   }
  //   // else if (router.asPath === '/s'){
  //   //   return 
  //   // }
  // }

  useEffect(() => {
    if (!router.isReady) return
    // emptyText()
  }, [text, router.isReady])

  useEffect(() => {
  }, [router.pathname])
  return (
    <div>
      <input type='text' value={address === "true" ? searching : text} onChange={changeHandler} autoFocus />
      {/* {searchData.length}개의 앨범 */}
      {/* {searchData.map(i =>
        <p key={i.albumtitle + i.artistname}>
          {i.albumtitle}
          {i.artistname}
        </p>
      )} */}
    </div>
  )
}

export default SearchForm

// 검색어를 입력하면 검색어가 포함되어 있는 리스트를 만듦 [o]
// s/index , s/[search] 검색어 입력 시, 페이지가 스왑되어야 하니 전역으로 검색어를 관리 [o]
// s/index에서는 검색어 입력 시 s/[search]로 이동 [o]
// s/[search]에서 검색어가 없으면 s/index로 검색어가 있으면 s/[search]로 페이지 스왑
// 주소창에서 검색어를 입력하면 전역 상태 값이 비어 있어 s/index로 강제로 이동됨
// 검색어가 비어 있고, 검색어와 router.query.[name]이 일치하지 않으면 router.query.[name]으로 검색
