import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { CommentsSchema } from '../types/CommentsSchema'

import { apiUrl } from 'shared/constants/baseUrl/baseUrl'

export const fetchComments = createAsyncThunk<CommentsSchema[], number[], { rejectValue: string }>(
  'comments/fetchComments',
  async (model, thunkAPI) => {
    try {
      const requests = model.map((commentID: number) =>
        axios.get<CommentsSchema>(`${apiUrl}/item/${commentID}.json`)
      )
      const responses = await Promise.all(requests)

      return responses.map(response => response.data)
    } catch (e) {
      return thunkAPI.rejectWithValue('some error')
    }
  }
)
