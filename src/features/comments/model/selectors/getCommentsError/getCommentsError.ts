import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const GetCommentsError = (state: StateSchema) => state.comments.error
