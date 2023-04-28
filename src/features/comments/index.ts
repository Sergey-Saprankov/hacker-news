export { Comments } from './ui/Сomments'
export type { CommentsSchema, CommentsListSchema } from './model/types/CommentsSchema'
export { commentsReducer } from './model/slice/commentSlice'
export { fetchComments } from './model/services/fetchComments'
export { getCommentsState } from './model/selectors/getCommentsState/getCommentsState'
export { getCommentStatus } from './model/selectors/getCommentStatus/getCommentStatus'
export { GetCommentsError } from './model/selectors/getCommentsError/getCommentsError'