import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: ['카페소개', '메뉴', '오시는 길', '인스타그램', '장바구니'],
  path: ['/introduction', '/menu', '/waymap']
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState
})

export default menuSlice;