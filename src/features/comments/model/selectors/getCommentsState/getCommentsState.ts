import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getCommentsState = (state: StateSchema) => state.comments.comments
