import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getNewsListState = (state: StateSchema) => state.newsList.items
