import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { commentsReducer } from 'features/comments'
import { newsReducer } from 'pages/News'
import { newsListReducer } from 'pages/NewsList'

export const createReduxStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    newsList: newsListReducer,
    news: newsReducer,
    comments: commentsReducer,
  }
  const store = configureStore<StateSchema>({
    reducer: rootReducer,
  })

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
