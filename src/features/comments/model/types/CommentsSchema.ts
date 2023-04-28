export interface CommentsSchema {
  by: string
  id: number
  parent: number
  time: number
  text: string
  type: string
  kids: number[]
}

export interface ChildCommentsSchema {
  [key: number]: CommentsSchema[]
}

export interface CommentsListSchema {
  comments: CommentsSchema[]
  childComments: ChildCommentsSchema
  status: boolean
  error: null | string
  parentId: number
}
