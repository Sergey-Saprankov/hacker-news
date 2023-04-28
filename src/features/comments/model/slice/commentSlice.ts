import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchComments } from '../services/fetchComments'
import { CommentsListSchema, CommentsSchema } from '../types/CommentsSchema'

import { fetchChildComments } from 'features/comments/model/services/fetchChildComments'

const initialState: CommentsListSchema = {
  comments: [],
  childComments: {},
  status: false,
  error: null,
  parentId: 0,
}

const commentsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    setParentID: (state, action) => {
      state.parentId = action.payload
    },
  },
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
      .addCase(fetchChildComments.pending, state => {
        state.status = true
        state.error = null
      })
      .addCase(fetchChildComments.fulfilled, (state, action) => {
        state.status = false
        state.childComments[state.parentId] = action.payload
      })
      .addCase(fetchChildComments.rejected, (state, action) => {
        state.status = false
        state.error = action.error.message || null
      })
  },
})

export const { reducer: commentsReducer } = commentsSlice
export const { setParentID } = commentsSlice.actions
