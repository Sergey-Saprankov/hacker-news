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
  name: 'comments',
  initialState: initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<{ commentId: number }>) => {
      state.comments = state.comments.map(el =>
        el.id === action.payload.commentId ? { ...el, isOpen: !el.isOpen } : el
      )
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

        state.comments = action.payload.map(el => ({ ...el, isOpen: false }))
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
        state.parentId = action.payload[0].parent
        state.childComments[state.parentId] = action.payload
      })
      .addCase(fetchChildComments.rejected, (state, action) => {
        state.status = false
        state.error = action.error.message || null
      })
  },
})

export const { reducer: commentsReducer } = commentsSlice
export const { setIsOpen } = commentsSlice.actions
