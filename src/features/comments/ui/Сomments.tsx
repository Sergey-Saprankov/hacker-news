import { FC, memo, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { getCommentsState } from '../model/selectors/getCommentsState/getCommentsState'
import { CommentsSchema } from '../model/types/CommentsSchema'

import { fetchComments } from 'features/comments/model/services/fetchComments'
import { createMarkup } from 'shared/lib/createMarkup'
import { useAppDispatch } from 'shared/lib/useAppDispatch'

interface CommentsProps {
  kids: number[]
}
export const Comments: FC<CommentsProps> = memo(({ kids }) => {
  const dispatch = useAppDispatch()
  const comments = useSelector(getCommentsState)

  useEffect(() => {
    dispatch(fetchComments(kids))
  }, [dispatch, kids])

  return (
    <ul>
      Comments
      {comments.map(({ text, id }: CommentsSchema) => {
        return (
          <li key={id}>
            <div dangerouslySetInnerHTML={createMarkup(text)} />
          </li>
        )
      })}
    </ul>
  )
})
