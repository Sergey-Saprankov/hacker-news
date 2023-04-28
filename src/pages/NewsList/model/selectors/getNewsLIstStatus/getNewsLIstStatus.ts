import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getNewsLIstStatus = (state: StateSchema) => state.news.status
