import { createSlice } from '@reduxjs/toolkit'

import { fetchComments } from '../services/fetchComments'
import { CommentsListSchema } from '../types/CommentsSchema'

const initialState: CommentsListSchema = {
  comments: [],
  status: false,
  error: null,
}

const commentsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchComments.pending, state => {
        state.status = true
        state.error = null
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = false
        state.comments = action.payload
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = false
        state.error = action.error.message || null
      })
  },
})

export const { reducer: commentsReducer } = commentsSlice
