import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getNewsState = (state: StateSchema) => state.news.items
