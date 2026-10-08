"use client"
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import wishlistSlice from './wishlistSlice'


export let store = configureStore(
    {
        reducer:{
            auth: authSlice,
            wishlistStore: wishlistSlice
        }
    }
)