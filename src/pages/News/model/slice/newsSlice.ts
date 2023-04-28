import { createSlice } from '@reduxjs/toolkit'

import { fetchNews } from '../services/fetchNews'
import { NewsSchema } from '../types/NewsSchema'

const initialState: NewsSchema = {
  items: {
    by: '',
    descendants: 0,
    id: 0,
    score: 0,
    time: 0,
    title: '',
    type: '',
    url: '',
    kids: [],
  },
  status: false,
  error: null,
}

const newsSlice = createSlice({
  name: 'aloneNews',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.status = true
        state.error = null
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = false
        state.items = action.payload
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = false
        state.error = action.error.message || null
      })
  },
})

export const { reducer: newsReducer } = newsSlice
