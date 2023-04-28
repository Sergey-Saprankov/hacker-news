import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { ItemsSchema } from 'pages/NewsList/model/types/NewListSchema'
import { apiUrl } from 'shared/constants/baseUrl/baseUrl'

export const fetchNewsList = createAsyncThunk<ItemsSchema[], void, { rejectValue: string }>(
  'news/fetchNews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<number[]>(`${apiUrl}/newstories.json`)
      const newsIds = response.data.slice(0, 100)
      const requests = newsIds.map((newsId: number) =>
        axios.get<ItemsSchema>(`${apiUrl}/item/${newsId}.json`)
      )
      const responses = await Promise.all(requests)
      const newsList = responses.map(response => response.data)

      return newsList
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)
