import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: '',
  initText: ''
}

// 이름, 초기 상태, 리듀서
// 리듀서의 인수는 (state, action) action을 통해 payload에 접근
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    insert: (state, action) => {
      state.text = action.payload
    },
    initText: (state, action) => {
      state.result = action.payload
    }
  }
})

// 컴포넌트에서 사용
export const { insert, initText } = searchSlice.actions

// 스토어를 구성할 때 필요
export default searchSlice.reducer
