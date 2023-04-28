import { FC, memo, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { getCommentsState } from '../model/selectors/getCommentsState/getCommentsState'
import { CommentsSchema } from '../model/types/CommentsSchema'

import { getChildComments } from 'features/comments/model/selectors/getChildComments/getChildComments'
import { fetchChildComments } from 'features/comments/model/services/fetchChildComments'
import { fetchComments } from 'features/comments/model/services/fetchComments'
import { createMarkup } from 'shared/lib/createMarkup'
import { useAppDispatch } from 'shared/lib/useAppDispatch'

interface CommentsProps {
  kids: number[]
}
export const Comments: FC<CommentsProps> = memo(({ kids }) => {
  const dispatch = useAppDispatch()
  const comments = useSelector(getCommentsState)
  const childComments = useSelector(getChildComments)

  useEffect(() => {
    dispatch(fetchComments(kids))
  }, [dispatch, kids])

  const getComments = (kids: number[]) => {
    dispatch(fetchChildComments(kids))
  }

  return (
    <ul>
      Comments
      {comments.map(({ text, id, kids }: CommentsSchema) => {
        const count = kids ? kids.length : 0

        return (
          <li key={id}>
            <div dangerouslySetInnerHTML={createMarkup(text)} />
            <div>{count}</div>
            {count && <button onClick={() => getComments(kids)}>show more comments</button>}
            {childComments && (
              <ol>
                {childComments.map(({ id, text, kids }: CommentsSchema) => {
                  return (
                    <li key={id}>
                      <div dangerouslySetInnerHTML={createMarkup(text)} />
                    </li>
                  )
                })}
              </ol>
            )}
          </li>
        )
      })}
    </ul>
  )
})
