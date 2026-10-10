import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: Cookies.get("TOKEN") ? Cookies.get("TOKEN") : null,
 
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token
      Cookies.set("TOKEN",state.token)
      
    },
    clearCredentials: (state) => {
      state.token = null
      Cookies.remove("TOKEN")
      
    },
  },
})

export const { setCredentials, clearCredentials } = authSlice.actions
// export const selectAuthToken = (state) => state.auth.token
export default authSlice.reducer