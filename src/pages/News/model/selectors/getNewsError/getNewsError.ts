import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getNewsError = (state: StateSchema) => state.news.error
