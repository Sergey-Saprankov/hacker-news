import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { ItemsSchema } from '../types/NewsSchema'

import { apiUrl } from 'shared/constants/baseUrl/baseUrl'

export const fetchNews = createAsyncThunk<ItemsSchema, { newsId: string }, { rejectValue: string }>(
  'news/fetchNews',
  async ({ newsId }, thunkAPI) => {
    try {
      const res = await axios.get<ItemsSchema>(`${apiUrl}/item/${newsId}.json`)

      return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)
