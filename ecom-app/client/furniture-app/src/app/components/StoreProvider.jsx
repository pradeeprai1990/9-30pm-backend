'use client'

import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function StoreProvider({ children }) {
  useEffect(() => {
    window.localStorage.removeItem('Cart')
  }, [])

  return <Provider store={store}>{children}</Provider>
}