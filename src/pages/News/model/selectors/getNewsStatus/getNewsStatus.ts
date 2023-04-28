import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getNewsStatus = (state: StateSchema) => state.news.status
