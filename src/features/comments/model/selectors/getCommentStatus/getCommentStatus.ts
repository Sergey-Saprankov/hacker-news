import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getCommentStatus = (state: StateSchema) => state.comments.status
