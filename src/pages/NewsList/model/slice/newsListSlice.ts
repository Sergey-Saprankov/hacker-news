import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchNewsList } from '../services/fetchNewsList'
import { NewsListSchema } from '../types/NewListSchema'

const initialState: NewsListSchema = {
  items: [],
  status: false,
  error: null,
}

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNewsList.pending, state => {
        state.status = true
        state.error = null
      })
      .addCase(fetchNewsList.fulfilled, (state, action) => {
        state.status = false
        state.items = action.payload
      })
      .addCase(fetchNewsList.rejected, (state, action) => {
        state.status = false
        state.error = action.error.message || null
      })
  },
})

export const { reducer: newsListReducer } = newsSlice
