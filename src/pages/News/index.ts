export { News } from './ui/News'
export { newsReducer } from './model/slice/newsSlice'
export type { NewsSchema, ItemsSchema } from './model/types/NewsSchema'
export { fetchNews } from './model//services/fetchNews'
export { getNewsState } from './model/selectors/getNewsState/getNewsState'
export { getNewsStatus } from './model/selectors/getNewsStatus/getNewsStatus'
export { getNewsError } from './model/selectors/getNewsError/getNewsError'
