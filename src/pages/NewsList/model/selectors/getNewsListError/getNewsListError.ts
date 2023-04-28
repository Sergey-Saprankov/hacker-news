import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getNewsListError = (state: StateSchema) => state.news.error
