import { NewsSchema } from 'pages/News'
import { NewsListSchema } from 'pages/NewsList'

export interface StateSchema {
  newsList: NewsListSchema
  news: NewsSchema
  // comments: CommentsListSchema;
}
