import { FC, memo, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { getCommentsState } from '../model/selectors/getCommentsState/getCommentsState'
import { CommentsSchema } from '../model/types/CommentsSchema'

import cls from './Comments.module.scss'

import { getChildComments } from 'features/comments/model/selectors/getChildComments/getChildComments'
import { getParentId } from 'features/comments/model/selectors/getParrentId/getParrentId'
import { fetchChildComments } from 'features/comments/model/services/fetchChildComments'
import { fetchComments } from 'features/comments/model/services/fetchComments'
import { setIsOpen, setParentID } from 'features/comments/model/slice/commentSlice'
import { createMarkup } from 'shared/lib/createMarkup'
import { useAppDispatch } from 'shared/lib/useAppDispatch'

interface CommentsProps {
  kids: number[]
}
export const Comments: FC<CommentsProps> = memo(({ kids }) => {
  const dispatch = useAppDispatch()
  const comments = useSelector(getCommentsState)
  const childComments = useSelector(getChildComments)
  const parentId = useSelector(getParentId)

  useEffect(() => {
    dispatch(fetchComments(kids))
  }, [dispatch, kids])

  const getComments = (kids: number[]) => {
    dispatch(fetchChildComments(kids))
  }

  return (
    <ul>
      Comments
      {comments.map(({ text, id, kids, parent, isOpen }: CommentsSchema) => {
        const count = kids ? kids.length : 0
        const onClickHandler = () => {
          console.log(parent)
          getComments(kids)
          dispatch(setIsOpen({ commentId: id }))
        }

        return (
          <li key={id}>
            <div dangerouslySetInnerHTML={createMarkup(text)} />
            <div>{count}</div>
            {count && !isOpen && (
              <button onClick={onClickHandler}>show more comments {kids.length}</button>
            )}
            {count && isOpen && (
              <button onClick={() => dispatch(setIsOpen({ commentId: id }))}>hide comment</button>
            )}
            {childComments && childComments[parentId] && (
              <ol>
                {childComments[parentId].map((com: CommentsSchema) => {
                  return com.parent === id && isOpen && <Comment id={com.id} text={com.text} />
                })}
              </ol>
            )}
          </li>
        )
      })}
    </ul>
  )
})

interface CommentProps {
  text: string
  id: number
}
export const Comment: FC<CommentProps> = memo(({ text, id }) => {
  return (
    <li key={id}>
      <div dangerouslySetInnerHTML={createMarkup(text)} />
    </li>
  )
})
