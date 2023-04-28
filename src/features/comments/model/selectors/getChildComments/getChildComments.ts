import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getChildComments = (state: StateSchema) => state.comments.childComments
